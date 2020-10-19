import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Landing from './Landing'
import WineRec from './WineRec'
import WinePair from './WinePair'
import FoodPair from './FoodPair'
import Login from '../Components/Login'
import Logout from '../Components/Logout'
import WineInfo from '../Components/WineInfo';

const usersAPI = 'http://localhost:3000/users'
const commentsAPI = 'http://localhost:3000/comments'
const userWinesAPI = 'http://localhost:3000/users_wines'

const postWines = 'http://localhost:3000/wines'

const API_KEY = process.env.REACT_APP_SPOON_API_KEY;

const myHeaders = { "Content-Type": "application/json", "Accepts": "application/json" }

const wineRecAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/recommendation?maxPrice='
const winePairAPI = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food='
const foodPairAPI = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/dishes?wine="
const recipeAPI = "https://rapidapi.p.rapidapi.com/food/site/search?query="

class Initial extends Component {
    constructor() {
        super()

        this.state = {
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            users: [],
            saved: [],
            currentUser: JSON.parse(sessionStorage.getItem('user')),
            recSearchTxt: '',
            recWines: {},
            winePairing: {},
            foodPairing: {},
            pairedFoods: [],
            pairedRecipes: [],
            wineInfo: {}
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
            this.getUserWines()
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
            .then(res => res.json())
            .then(data => {
                this.setCurrentUser(data)
                this.getUserWines()
            })
    }

    setCurrentUser = (obj) => {
        sessionStorage.setItem('isLoggedIn', true)
        sessionStorage.setItem('user', JSON.stringify(obj))
        // sessionStorage.setItem('saved', JSON.stringify(obj.wines))
        this.setState({
            isLoggedIn: JSON.parse(sessionStorage.getItem('isLoggedIn')),
            currentUser: JSON.parse(sessionStorage.getItem('user')) //,
            // saved: JSON.parse(sessionStorage.getItem('saved'))
        })
        console.log(this.state.isLoggedIn, this.state.currentUser)
    }

    getWineRec = (query, maxPrice, minRating) => {
        return fetch(`${wineRecAPI}${maxPrice}&minRating=${minRating}&number=10&wine=${query}`, {
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
            .then(data => {
                this.setState({
                    foodPairing: data,
                    pairedFoods: data.pairings
                })
                this.state.pairedFoods.map(food => this.getRecipe(food))
            })
            .catch(err => {
                console.log(err);
            });
    }

    getRecipe = (query) => {
        return fetch(recipeAPI + query, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.Recipes)
                this.setState({ pairedRecipes: [...this.state.pairedRecipes, data.Recipes] })
            })
    }

    clearRecipes = () => {
        this.setState({ pairedRecipes: [] })
    }

    clearRecs = () => {
        this.setState({ recWines: [] })
    }

    setWineInfo = (wine) => {
        this.setState({wineInfo: wine})
        sessionStorage.setItem('wineInfo', JSON.stringify(wine))
        console.log(this.state.wineInfo)
    }

    postWine = (wine) => {
        console.log(wine)
        return fetch(postWines, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(wine)
        })
            .then(res => res.json())
            .then(data => {
                this.setState((prev) => ({ saved: [...prev.saved, data] }))
                sessionStorage.setItem('saved', JSON.stringify([...this.state.currentUser.wines, data]))
            })
    }

    deleteWine = (wineId) => {
        return fetch(`${userWinesAPI}/${wineId}`, {
            method: 'DELETE',
            headers: myHeaders
        })
            .then(data => {
                console.log(data)
                this.setState((prev) => ({ saved: prev.saved.filter(wine => wine.id !== wineId) }))
                sessionStorage.setItem('saved', JSON.stringify(this.state.saved))
            })
    }

    postComment = (comment) => {
        return fetch(commentsAPI, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.getUserWines()
            })
    }

    getUserWines = () => {
        if (this.state.currentUser !== null) {
            return fetch('http://localhost:3000/saved', {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({ user_id: this.state.currentUser.id })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    // sessionStorage.setItem('saved', JSON.stringify(data))
                    this.setState({
                        saved: data
                    })
                })
        }
    }

    renderLoginOrHome = () => {
        // console.log(API_KEY)
        if (!this.state.isLoggedIn) {
            return (
                <div className="App">
                    <Router>
                        <Landing 
                        postUser={this.postUser}
                        setCurrentUser={this.setCurrentUser}
                        users={this.state.users}
                        />
                        {/* <Login
                            postUser={this.postUser}
                            setCurrentUser={this.setCurrentUser}
                            users={this.state.users}
                        /> */}
                        {/* <Logout setLogout={this.setLogout} /> */}
                    </Router>
                </div>
            )
        } else if (this.state.isLoggedIn) {
            return <Router>
                <NavBar currentUser={this.state.currentUser}/>
                <Redirect to='/home' />
                <Switch>
                    <Route exact path="/recommendations">
                        <WineRec
                            getWineRec={this.getWineRec}
                            wines={this.state.recWines}
                            postWine={this.postWine}
                            key={Date.now()}
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
                            pairedRecipes={this.state.pairedRecipes}
                            clearRecipes={this.clearRecipes}
                        />
                    </Route>
                    <Route exact path="/home">
                        <Home
                            currentUser={this.state.currentUser}
                            saved={this.state.saved}
                            postComment={this.postComment}
                            deleteWine={this.deleteWine}
                            setWineInfo={this.setWineInfo}
                        />
                    </Route>
                    <Route exact path="/wine_info">
                        <WineInfo
                            currentUser={this.state.currentUser}
                            postComment={this.postComment}
                            wine={this.state.wineInfo}
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
