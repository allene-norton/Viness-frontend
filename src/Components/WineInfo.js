import React, { Component } from 'react';
import CommentsContainer from '../Containers/CommentsContainer'

class WineInfo extends Component {

    handleDelete = () => {
        this.props.deleteWine(this.props.wine.id)
    }

    render() {
        let wine = this.props.wine
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
                <CommentsContainer wine={this.props.wine} postComment={this.props.postComment} />
                <button onClick={this.handleDelete} >Delete Wine</button>
            </div>
        );
    }
}

export default WineInfo;
