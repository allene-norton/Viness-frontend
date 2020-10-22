import React, { Component } from 'react'
import PairSearch from '../Components/PairSearch'
import PairResults from '../Components/PairResults'

class WinePair extends Component {
    // renderWines = (wines) => {
    //     return wines.map(wine => <PairResults key={wine.id} wine={wine} postWine={this.props.postWine} postUserWine={this.props.postUserWine} />)
    // }
    render() {
        return (
            <div className="pair-page">
                <p style={{paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem'}}>wine pairing</p>
                <div><PairSearch getWinePair={this.props.getWinePair} /></div>
                <div><PairResults winePairing={this.props.winePairing} postWine={this.props.postWine} /></div>
            </div>
        );
    }
}

export default WinePair;
