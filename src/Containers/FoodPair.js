import React, { Component } from 'react'
import FoodSearch from '../Components/FoodSearch'
import FoodResults from '../Components/FoodResults'

class FoodPair extends Component {

  pairedFoods = this.props.foodPairing.pairings
  foodTxt = this.props.foodPairing.text
  allWines = ['assyrtiko',
    'pinot blanc',
    'cortese',
    'roussanne',
    'moschofilero',
    'muscadet',
    'viognier',
    'verdicchio',
    'greco',
    'marsanne',
    'white burgundy',
    'chardonnay',
    'gruener veltliner',
    'white rioja',
    'frascati',
    'gavi',
    'l acadie blanc',
    'trebbiano',
    'sauvignon blanc',
    'catarratto',
    'albarino',
    'arneis',
    'verdejo',
    'vermentino',
    'soave',
    'pinot grigio',
    'dry riesling',
    'torrontes',
    'mueller thurgau',
    'grechetto',
    'gewurztraminer',
    'chenin blanc',
    'white bordeaux',
    'semillon',
    'riesling',
    'sauternes',
    'sylvaner',
    'lillet blanc',
    'petite sirah',
    'zweigelt',
    'baco noir',
    'bonarda',
    'cabernet franc',
    'bairrada',
    'barbera wine',
    'primitivo',
    'pinot noir',
    'nebbiolo',
    'dolcetto',
    'tannat',
    'negroamaro',
    'red burgundy',
    'corvina',
    'rioja',
    'cotes du rhone',
    'grenache',
    'malbec',
    'zinfandel',
    'sangiovese',
    'carignan',
    'carmenere',
    'cesanese',
    'cabernet sauvignon',
    'aglianico',
    'tempranillo',
    'shiraz',
    'mourvedre',
    'merlot',
    'nero d avola',
    'bordeaux',
    'marsala',
    'port',
    'gamay',
    'dornfelder',
    'concord wine',
    'pinotage',
    'agiorgitiko',
    'pedro ximenez',
    'moscato',
    'late harvest',
    'ice wine',
    'white port',
    'lambrusco dolce',
    'madeira',
    'banyuls',
    'vin santo',
    'port',
    'sparkling rose',
    'cava',
    'cremant',
    'champagne',
    'prosecco',
    'spumante',
    'sherry',
    'cream sherry',
    'dry sherry',
    'vermouth',
    'dry vermouth',
    'fruit wine',
    'mead']

  checkIfWines = () => {
    // if (this.allWines.some(w => this.props.pairedRecipes.includes(w))) {
    //   return true
    // } else {
    //   return false
    // }
    if (Object.keys(this.props.foodPairing).includes('pairings')) {
      if (this.allWines.some(w => this.props.foodPairing.pairings.includes(w))) {
        return true
      } else {
        return false
      }
    }
    else { return }
  }

  renderFoods = (foods) => {
    if (Object.keys(this.props.foodPairing).includes('status')) { return <p style={{ fontSize: '1.5rem' }}>{this.props.foodPairing.message}</p> }
    else if (Object.keys(this.props.foodPairing).includes('pairings')) {
      if (this.props.pairedRecipes.length <= 0) { return <p style={{ fontSize: '1.5rem' }}>Sorry, we couldn't find a match. Please try entering another varietal.</p> }
      else if (this.checkIfWines()) { 
        return <p>To get a meal pairing, try entering a varietal. If you're looking for a wine to pair with a dish or ingredient, select 'wine pairing' from the menu.</p>
      }
      else {
        return this.props.pairedRecipes.map(recipes => <FoodResults key={recipes[0].name} recipes={recipes}
        />)
      }
    }
    else { return undefined }
  }
  renderText = (text) => {
    if (Object.keys(this.props.foodPairing).includes('status')) { return undefined }
    else if (Object.keys(this.props.foodPairing).includes('text')) { return <p>{text}</p> }
    else { return undefined }
  }
  render() {
    console.log(this.props.foodPairing)
    this.checkIfWines()
    return (
      <div className="food-pair-page">
        <p style={{ paddingTop: '50px', fontFamily: 'Josefin Sans', fontSize: '3rem' }}>meal pairing</p>
        <div><FoodSearch getFoodPair={this.props.getFoodPair} clearRecipes={this.props.clearRecipes} /></div>
        <div className='food-pair-text'>{this.renderText(this.props.foodPairing.text)}</div>
        <div className='recipes'>{this.renderFoods(this.props.foodPairing.pairings)}</div>
      </div>
    );
  }
}

export default FoodPair;
