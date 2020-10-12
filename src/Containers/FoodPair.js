import React, { Component } from 'react'
import FoodSearch from '../Components/FoodSearch'
import FoodResults from '../Components/FoodResults'

class FoodPair extends Component {
  state = {
    foodPairing: this.props.foodPairing
}

pairObj = this.state.foodPairing

pairedFoods = this.pairObj.pairings
foodTxt = this.pairObj.text

renderFoods = (foods) => {
    if (Object.keys(this.pairObj).length >= 1)
    {return foods.map(food => <FoodResults key={food} food={food} />)}
    else {return undefined}
}
renderText = (text) => {
    if (Object.keys(this.pairObj).length >= 1)
    {return <p>{text}</p>}
    else {return undefined}
}
  render() {
    return (
      <div className="food-pair-page">
        <h2>Food Pair Page</h2>
        <div><FoodSearch getFoodPair={this.props.getFoodPair} /></div>
        <div>{this.renderText(this.foodTxt)}</div>
        <div>{this.renderFoods(this.pairedFoods)}</div>
      </div>
    );
  }
}

export default FoodPair;
