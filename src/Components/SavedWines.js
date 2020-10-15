import React, { Component } from 'react';
import WineInfo from './WineInfo'

class SavedWines extends Component {
    state = {
        displayWine: true
    }

    handleClick = () => {
        this.setState({ displayWine: !this.state.displayWine })
    }

    handleDelete = () => {
        console.log(this.props.wine.id)
        this.props.deleteWine(this.props.wine.id)
    }

    renderWine = () => {
        if (this.state.displayWine) {
            let wine = this.props.wine
            console.log(wine)
            return (
                <div className="saved-wine">
                    <h1>{wine.title}</h1>
                    <img onClick={() => this.handleClick()} src={wine.imageUrl} alt={wine.title} />
                    <button onClick={this.handleDelete} >Delete Wine</button>
                </div>
            )
        } else {
            let wine = this.props.wine
            console.log(wine.title)
            return (
                <div className="saved-wine">
                    <WineInfo wine={this.props.wine} closeDisplay={this.handleClick} postComment={this.props.postComment} deleteWine={this.props.deleteWine} />
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
