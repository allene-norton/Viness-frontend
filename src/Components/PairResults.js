import React, { Component } from 'react';
import RecResults from './RecResults'

class PairResults extends Component {

    // state = {
    //     winePairing: this.props.winePairing
    // }

    // pairObj = this.props.winePairing

    // pairedWines = this.props.winePairing.pairedWines
    // desc = this.props.winePairing.pairingText
    // bottles = this.props.winePairing.productMatches
    renderPairs = (pairs) => {
        if (Object.keys(this.props.winePairing).includes('status')) { return undefined }
        else if (Object.keys(this.props.winePairing).includes('pairedWines')) { return pairs.map(wine => <li>{wine}</li>) }
        else { return undefined }
    }
    renderWines = (wines) => {
        if (Object.keys(this.props.winePairing).includes('status')) { return <p>{this.props.winePairing.message}</p> }
        else if (Object.keys(this.props.winePairing).includes('pairedWines')) {
            if (wines.length === 0) { return <p>Could not find a match. Please try again with another dish, ingredient, or cuisine type.</p> } else { return wines.map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />) }}
        else { return undefined }
        }

        render() {
            console.log(this.props.winePairing)
            return (
                <div className="rec-results">
                    {console.log(this.props.winePairing.pairedWines)}
                    <div className="paired-wines">
                        <ul>
                            {this.renderPairs(this.props.winePairing.pairedWines)}
                        </ul>
                    </div>
                    <p>{this.props.winePairing.pairingText}</p>
                    <div className="paired-bottle">
                        {this.renderWines(this.props.winePairing.productMatches)}
                    </div>
                </div>
            );
        }
    }

    export default PairResults;
