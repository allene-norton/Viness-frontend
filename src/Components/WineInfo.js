import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import CommentsContainer from '../Containers/CommentsContainer'

const wine = JSON.parse(sessionStorage.getItem('wineInfo'))
class WineInfo extends Component {
    
    renderRating = () => {
        if (wine.averageRating < 0.4) {
            return <div><Icon name='star' size='small' /></div>
        } else if (wine.averageRating >= 0.4 && wine.averageRating < 0.6) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (wine.averageRating >= 0.6 && wine.averageRating < 0.8) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (wine.averageRating >= 0.8 && wine.averageRating < 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (wine.averageRating >= 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else{
            return 'currently unavailable'
        }
    }

    render() {
        
        console.log(wine.title)
        return (
            <div className="wine-info">
                <h1>{wine.title}</h1>
                <img src={wine.imageUrl} alt={wine.title} />
                <h3>{wine.description}</h3>
                <h3>{wine.price}</h3>
                <h3>Rating: {this.renderRating()}</h3>
                <h4>Comments:</h4>
                <CommentsContainer wine={wine} postComment={this.props.postComment} />
            </div>
        );
    }
}

export default WineInfo;
