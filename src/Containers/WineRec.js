import React, { Component } from 'react'
import RecSearch from '../Components/RecSearch'
import RecResults from '../Components/RecResults'

class WineRec extends Component {
    renderWines = (wines) => {
        if (Object.keys(wines).includes('status')) {
        return <p>{wines.message}</p>
        } else if ((Object.keys(wines).includes('recommendedWines')))
        {return wines['recommendedWines'].map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />)}
        else {return undefined}
    }
    render() {
        console.log(this.props.wines)
        // console.log(this.props.wines['recommendedWines'])
        return (
            <div className="rec-page">
                {/* {console.log(this.props.wines)} */}
                <h2>Wine Rec Page</h2>
                <div><RecSearch getWineRec={this.props.getWineRec} /></div>
                <div>{this.renderWines(this.props.wines)}</div>
            </div>
        );
    }
}

export default WineRec;
