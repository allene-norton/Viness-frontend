import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class RecResults extends Component {

    handleClick = () => {
        let userId = JSON.parse(sessionStorage.getItem('user')).id
        this.props.postWine({...this.props.wine, user_id: userId})
        alert('Your wine has been saved to your profile!')
    }

    render() {
        // let userId = JSON.parse(sessionStorage.getItem('user')).user_id
        // console.log({...this.props.wine, user_id: userId})
        let wine = this.props.wine
        console.log(wine.title)
        return (
            <div className="rec-results">
                <h1>{wine.title}</h1>
                <img src={wine.imageUrl} alt={wine.title} />
                <h3>{wine.description}</h3>
                <h3>{wine.price}</h3>
                <button onClick={this.handleClick} >Save Wine</button>
            </div>
        );
    }
}

export default RecResults;
