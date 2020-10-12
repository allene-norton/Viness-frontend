import React, { Component } from 'react'
import PairSearch from '../Components/PairSearch'
import PairResults from '../Components/PairResults'

class WinePair extends Component {
    // renderWines = (wines) => {
    //     return wines.map(wine => <PairResults key={wine.id} wine={wine} postWine={this.props.postWine} postUserWine={this.props.postUserWine} />)
    // }
    render() {
        return (
            <div className="rec-page">
                <h2>Wine Pair Page</h2>
                <div><PairSearch getWinePair={this.props.getWinePair} /></div>
                <div><PairResults winePairing={this.props.winePairing} postWine={this.props.postWine} /></div>
            </div>
        );
    }
}

export default WinePair;
