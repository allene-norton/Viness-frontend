import React, { Component } from 'react';
import WineInfo from './WineInfo'

class SavedWines extends Component {
    state = {
        displayWine: true
    }

    handleClick = () => {
        this.setState({ displayWine: !this.state.displayWine })
    }

    renderWine = () => {
        if (this.state.displayWine) {
            let wine = this.props.wine
            console.log(wine.title)
            return (
                <div className="saved-wine">
                    <h1>{wine.title}</h1>
                    <img onClick={() => this.handleClick()} src={wine.imageUrl} alt={wine.title} />
                </div>
            )
        } else {
            let wine = this.props.wine
            console.log(wine.title)
            return (
                <div className="saved-wine">
                    <WineInfo wine={this.props.wine} closeDisplay={this.handleClick} postComment={this.props.postComment} />
                </div>
            );
        }
    }

    render() {
        let wine = this.props.wine
        console.log(wine.title)
        return (
            <div className="saved">
                {this.renderWine()}
            </div>
        );
    }
}

export default SavedWines;
