import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'
import CommentsContainer from '../Containers/CommentsContainer'

class WineInfo extends Component {
    wine = this.props.wine
    renderRating = () => {
        if (this.wine.averageRating < 0.4) {
            return <div><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.4 && this.wine.averageRating < 0.6) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.6 && this.wine.averageRating < 0.8) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 0.8 && this.wine.averageRating < 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else if (this.wine.averageRating >= 1) {
            return <div><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /><Icon name='star' size='small' /></div>
        } else{
            return 'currently unavailable'
        }
    }

    render() {
        
        console.log(this.wine.title)
        return (
            <div className="wine-info" id='wine-info'>
                <p style={{paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem'}}>{this.wine.title}</p>
                <img src={this.wine.imageUrl} alt={this.wine.title} />
                <h3>{this.wine.description}</h3>
                <h3>{this.wine.price}</h3>
                <h3>Rating: {this.renderRating()}</h3>
                <CommentsContainer wine={this.wine} postComment={this.props.postComment} />
            </div>
        );
    }
}

export default WineInfo;
