import React, { Component } from 'react'
import PairSearch from '../Components/PairSearch'
import PairResults from '../Components/PairResults'
import { Container } from 'semantic-ui-react'

class WinePair extends Component {
    // renderWines = (wines) => {
    //     return wines.map(wine => <PairResults key={wine.id} wine={wine} postWine={this.props.postWine} postUserWine={this.props.postUserWine} />)
    // }
    render() {
        return (
            <div className="pair-page">
                <Container>
                    <p style={{ paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem' }}>wine pairing</p>
                    <div><PairSearch getWinePair={this.props.getWinePair} /></div>
                    <div><PairResults winePairing={this.props.winePairing} postWine={this.props.postWine} /></div>
                </Container>
            </div>
        );
    }
}

export default WinePair;
