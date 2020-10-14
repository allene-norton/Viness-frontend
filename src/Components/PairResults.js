import React, { Component } from 'react';
import RecResults from './RecResults'

class PairResults extends Component {

    // state = {
    //     winePairing: this.props.winePairing
    // }

    pairObj = this.props.winePairing

    pairedWines = this.pairObj.pairedWines
    desc = this.pairObj.pairingText
    bottles = this.pairObj.productMatches
    renderPairs = (pairs) => {
        if (Object.keys(this.pairObj).includes('status')) { return undefined }
        else if (Object.keys(this.pairObj).includes('pairedWines')) { return pairs.map(wine => <li>{wine}</li>) }
        else { return undefined }
    }
    renderWines = (wines) => {
        if (Object.keys(this.pairObj).includes('status')) { return <p>{this.pairObj.message}</p> }
        else if (Object.keys(this.pairObj).includes('pairedWines')) {
            if (wines.length === 0) { return <p>Could not find a match. Please try again with another dish, ingredient, or cuisine type.</p> } else { return wines.map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />) }}
        else { return undefined }
        }

        render() {
            console.log(this.pairObj)
            return (
                <div className="rec-results">
                    {console.log(this.pairedWines)}
                    <div className="paired-wines">
                        <ul>
                            {this.renderPairs(this.pairedWines)}
                        </ul>
                    </div>
                    <p>{this.desc}</p>
                    <div className="paired-bottle">
                        {this.renderWines(this.bottles)}
                    </div>
                </div>
            );
        }
    }

    export default PairResults;
