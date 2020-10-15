import React, { Component } from 'react';
import Recipe from './Recipe'
class FoodResults extends Component {

    renderRecipes = () => {
        return this.props.recipes.map(recipe => <Recipe key={recipe.name} recipe={recipe} />)
    }

    render() {
        let recipes = this.props.recipes
        return (
            <div className="food-results">
                <div className="paired-foods">
                    {console.log(recipes)}
                    {this.renderRecipes()}
                </div>
            </div>
        );
    }
}

export default FoodResults;
