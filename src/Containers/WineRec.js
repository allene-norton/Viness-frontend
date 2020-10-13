import React, { Component } from 'react'
import RecSearch from '../Components/RecSearch'
import RecResults from '../Components/RecResults'

class WineRec extends Component {
    
    renderWines = (wines) => {
        if (Object.keys(wines).includes('status')) {
            return <p>{wines.message}</p>
        } else if ((Object.keys(wines).includes('recommendedWines'))) { return wines['recommendedWines'].map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />) }
        else { return undefined }
    }
    render() {
        return (
            <div className="rec-page">
                <h2>Wine Recommendations</h2>
                <div><RecSearch getWineRec={this.props.getWineRec} renderResultsList={this.renderResultsList} /></div>
                <div>{this.renderWines(this.props.wines)}</div>
            </div>
        );
    }
}

export default WineRec;
