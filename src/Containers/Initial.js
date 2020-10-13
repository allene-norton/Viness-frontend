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
const winesAPI = 'http://localhost:3000/wines'
const usersWinesAPI = 'http://localhost:3000/users_wines'

const postWines = 'http://localhost:3000/wines'

const API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const myHeaders = { "Content-Type": "application/json", "Accepts": "application/json" }

const wineRecAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?maxPrice=50&minRating=0.7&number=10&wine='
const winePairAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food='
const foodPairAPI = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/dishes?wine="

class Initial extends Component {
    constructor() {
        super()

        let isLoggedIn = false;
        // if (window.location.href.includes("/home")) {
        //     isLoggedIn = true;
        // }

        this.state = {
            isLoggedIn,
            users: [],
            allWines: [],
            userWines: [],
            currentUser: {},
            recSearchTxt: '',
            recWines: {},
            winePairing: {},
            foodPairing: {}
        }
    }

    componentDidMount() {
        this.getUsers()
        this.getWines()
        this.getUsersWines()
    }



    getUsers = () => {
        return fetch(usersAPI).then(res => res.json()).then(data => this.setState({ users: data }))
    }
    getWines = () => {
        return fetch(winesAPI).then(res => res.json()).then(data => this.setState({ allWines: data }))
    }
    getUsersWines = () => {
        return fetch(usersWinesAPI).then(res => res.json()).then(data => this.setState({ userWines: data }))
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
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('user', JSON.stringify(obj))
        this.setState({
            isLoggedIn: true,
            currentUser: JSON.parse(localStorage.getItem('user'))
        })
        console.log(this.state.isLoggedIn, this.state.currentUser)
    }

    setLogout = () => {
        this.setState({
            isLoggedIn: false,
            currentUser: null
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
            .then(data => console.log(data))
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
                <Switch>
                    <Route exact path="/recommendations"
                        component={() => <WineRec
                            getWineRec={this.getWineRec}
                            wines={this.state.recWines}
                            postWine={this.postWine}
                        />} />
                    <Route exact path="/wine_pairing"
                        component={() => <WinePair
                            getWinePair={this.getWinePair}
                            winePairing={this.state.winePairing}
                            postWine={this.postWine}
                        />} />
                    <Route exact path="/food_pairing"
                        component={() => <FoodPair
                            getFoodPair={this.getFoodPair}
                            foodPairing={this.state.foodPairing}
                        />} />
                    {/* <Redirect to='/home' /> */}
                    <Route exact path="/home"
                        component={() => <Home
                            currentUser={this.state.currentUser}
                            setLogout={this.setLogout}
                            allWines={this.state.allWines}
                            userWines={this.state.userWines}
                        />} />
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
