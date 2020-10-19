import React, { Component } from 'react';
import CommentsContainer from '../Containers/CommentsContainer'

class WineInfo extends Component {

    handleDelete = () => {
        this.props.deleteWine(this.props.wine.id)
    }

    render() {
        let wine = JSON.parse(sessionStorage.getItem('wineInfo'))
        console.log(wine.title)
        return (
            <div className="wine-info">
                <h1>I'm the Wine Info Page</h1>
                <h1>{wine.title}</h1>
                <img onClick={() => this.props.closeDisplay()} src={wine.imageUrl} alt={wine.title} />
                <h3>{wine.description}</h3>
                <h3>{wine.price}</h3>
                <h3>Rating: {wine.averageRating}</h3>
                <h4>Comments:</h4>
                <CommentsContainer wine={wine} postComment={this.props.postComment} />
                <button>Delete Wine</button>
            </div>
        );
    }
}

export default WineInfo;
