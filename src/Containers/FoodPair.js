import React, { Component } from 'react'
import FoodSearch from '../Components/FoodSearch'
import FoodResults from '../Components/FoodResults'

class FoodPair extends Component {
  
  pairedFoods = this.props.foodPairing.pairings
  foodTxt = this.props.foodPairing.text

  renderFoods = (foods) => {
    if (Object.keys(this.props.foodPairing).includes('status')) { return <p>{this.props.foodPairing.message}</p> }
    else if (Object.keys(this.props.foodPairing).includes('pairings')) { return this.props.pairedRecipes.map(recipes => <FoodResults key={recipes[0].name} recipes={recipes}  />) }
    else { return undefined }
  }
  renderText = (text) => {
    if (Object.keys(this.props.foodPairing).includes('status')) { return undefined }
    else if (Object.keys(this.props.foodPairing).includes('text')) { return <p>{text}</p> }
    else { return undefined }
  }
  render() {
    console.log(this.props.foodPairing)
    return (
      <div className="food-pair-page">
        <h2>Food Pairing</h2>
        <div><FoodSearch getFoodPair={this.props.getFoodPair} clearRecipes={this.props.clearRecipes} /></div>
        <div>{this.renderText(this.props.foodPairing.text)}</div>
        <div>{this.renderFoods(this.props.foodPairing.pairings)}</div>
      </div>
    );
  }
}

export default FoodPair;
