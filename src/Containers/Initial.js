import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import WineRec from './WineRec'
import WinePair from './WinePair'
import FoodPair from './FoodPair'
import Login from '../Components/Login'
import Logout from '../Components/Logout'

const usersAPI = 'http://localhost:3000/users'


const postWines = 'http://localhost:3000/wines'

const API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const myHeaders = { "Content-Type": "application/json", "Accepts": "application/json" }

const wineRecAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?maxPrice=50&minRating=0.7&number=10&wine='
const winePairAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food='
const foodPairAPI = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/dishes?wine="

class Initial extends Component {
    constructor() {
        super()

        // sessionStorage.setItem('isLoggedIn', false)
        // sessionStorage.setItem('user', null)
       
        this.state = {
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            users: [],
            saved: JSON.parse(sessionStorage.getItem('saved')),
            currentUser: JSON.parse(sessionStorage.getItem('user')),
            recSearchTxt: '',
            recWines: {},
            winePairing: {},
            foodPairing: {}
        }
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = () => {
        return fetch(usersAPI).then(res => res.json()).then(data => {
            this.setState({
                users: data
            })
        })
    }
   
    postUser = (token) => {
        return fetch(usersAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ id_token: token })
        })
            .then(res => console.log(res))
    }

    setCurrentUser = (obj) => {
        sessionStorage.setItem('isLoggedIn', true)
        sessionStorage.setItem('user', JSON.stringify(obj))
        sessionStorage.setItem('saved', JSON.stringify(obj.wines))
        this.setState({
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            currentUser: JSON.parse(sessionStorage.getItem('user')),
            saved: JSON.parse(sessionStorage.getItem('saved'))
        })
        console.log(this.state.isLoggedIn, this.state.currentUser)
    }

    setLogout = () => {
        sessionStorage.setItem('isLoggedIn', false)
        sessionStorage.setItem('user', null)
        sessionStorage.setItem('saved', null)
        this.setState({
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            currentUser: JSON.parse(sessionStorage.getItem('user')),
            saved: JSON.parse(sessionStorage.getItem('saved'))
        })
    }

    getWineRec = (query) => {
        return fetch(wineRecAPI + query, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ recWines: data }))
            .catch(err => {
                console.log(err);
            });
    }

    getWinePair = (query) => {
        return fetch(winePairAPI + query, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ winePairing: data }))
            .catch(err => {
                console.log(err);
            });
    }

    getFoodPair = (query) => {
        return fetch(foodPairAPI + query, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(res => res.json())
            .then(data => this.setState({ foodPairing: data }))
            .catch(err => {
                console.log(err);
            });
    }

    postWine = (wine) => {
        console.log(wine)
        return fetch(postWines, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(wine)
        })
            .then(res => res.json())
            .then(data => this.setState((prev) => ({ saved: [...prev.saved, data] })))
    }

    renderLoginOrHome = () => {
        // console.log(API_KEY)
        if (!this.state.isLoggedIn) {
            return (
                <div className="App">
                    <Router>
                        <Login
                            postUser={this.postUser}
                            setCurrentUser={this.setCurrentUser}
                            users={this.state.users}
                        />
                        <Logout setLogout={this.setLogout} />
                    </Router>
                </div>
            )
        } else if (this.state.isLoggedIn) {
            return <Router>
                <NavBar />
                <Redirect to='/home' />
                {/* {this.getSavedWines()} */}
                <Switch>
                    <Route exact path="/recommendations">
                        <WineRec
                            getWineRec={this.getWineRec}
                            wines={this.state.recWines}
                            postWine={this.postWine}
                        />
                    </Route>
                    <Route exact path="/wine_pairing">
                        <WinePair
                            getWinePair={this.getWinePair}
                            winePairing={this.state.winePairing}
                            postWine={this.postWine}
                        />
                    </Route>
                    <Route exact path="/food_pairing">
                        <FoodPair
                            getFoodPair={this.getFoodPair}
                            foodPairing={this.state.foodPairing}
                        />
                    </Route>
                    {/* <Redirect to='/home' /> */}
                    <Route exact path="/home">
                        <Home
                            currentUser={this.state.currentUser}
                            setLogout={this.setLogout}
                            saved={this.state.saved}
                        />
                    </Route>
                </Switch>
            </Router>

        }
    }
    render() {
        return (
            <div>
                {this.renderLoginOrHome()}
            </div>
        );
    }

}

export default Initial;
