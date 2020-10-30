import React, { Component } from 'react'
import FoodSearch from '../Components/FoodSearch'
import FoodResults from '../Components/FoodResults'

class FoodPair extends Component {
  
  pairedFoods = this.props.foodPairing.pairings
  foodTxt = this.props.foodPairing.text

  renderFoods = (foods) => {
    if (Object.keys(this.props.foodPairing).includes('status')) { return <p style={{fontSize: '1.5rem'}}>{this.props.foodPairing.message}</p> }
    else if (Object.keys(this.props.foodPairing).includes('pairings')) { 
      if (this.props.pairedRecipes.length <= 0) {return <p style={{fontSize: '1.5rem'}}>Sorry, we couldn't find a match. Please try entering another varietal.</p>}
      else {
      return this.props.pairedRecipes.map(recipes => <FoodResults key={recipes[0].name} recipes={recipes}  
      />) }}
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
        <p style={{paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem'}}>meal pairing</p>
        <div><FoodSearch getFoodPair={this.props.getFoodPair} clearRecipes={this.props.clearRecipes} /></div>
        <div className='food-pair-text'>{this.renderText(this.props.foodPairing.text)}</div>
        <div className='recipes'>{this.renderFoods(this.props.foodPairing.pairings)}</div>
      </div>
    );
  }
}

export default FoodPair;
