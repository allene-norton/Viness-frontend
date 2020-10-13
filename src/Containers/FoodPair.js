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
    if (Object.keys(this.pairObj).includes('status')) { return <p>{this.pairObj.message}</p> }
    else if (Object.keys(this.pairObj).includes('pairings')) { return foods.map(food => <FoodResults key={food} food={food} />) }
    else { return undefined }
  }
  renderText = (text) => {
    if (Object.keys(this.pairObj).includes('status')) { return undefined }
    else if (Object.keys(this.pairObj).includes('text')) { return <p>{text}</p> }
    else { return undefined }
  }
  render() {
    console.log(this.pairObj)
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
