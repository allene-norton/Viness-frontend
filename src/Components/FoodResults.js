import React, { Component } from 'react';

class FoodResults extends Component {

    state = {
    }

    // pairObj = this.state.winePairing

    // pairedWines = this.pairObj.pairedWines
    // desc = this.pairObj.pairingText
    // bottles = this.pairObj.productMatches
    // renderPairs = (pairs) => {
    //     if (Object.keys(this.pairObj).length >= 1)
    //     {return pairs.map(wine => <li>{wine}</li>)}
    //     else {return undefined}
    // }
    // renderWines = (wines) => {
    //     if (Object.keys(this.pairObj).length >= 1)
    //     {return wines.map(wine => <RecResults key={wine.id} wine={wine} postWine={this.props.postWine} />)}
    //     else {return undefined}
    // }

    render() {
        let food = this.props.food
        return (
            <div className="food-results">
                <div className="paired-foods">
                    <p>
                        {food}
                    </p>
                </div>
            </div>
        );
    }
}

export default FoodResults;
