import React, { Component } from 'react';

class Recipe extends Component {

    render() {
        console.log(this.props.recipe)
        let recipe = this.props.recipe
        return (
            <div className="food-results">
                <div className="paired-foods">
                   <h3>{recipe.name}</h3>
                </div>
            </div>
        );
    }
}

export default Recipe;
