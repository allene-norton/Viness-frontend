import React, { Component } from 'react';

class Recipe extends Component {

    render() {
        console.log(this.props.recipe)
        let recipe = this.props.recipe
        return (
            <div className="food-results">
                <div className="paired-foods">
                   <a href={recipe.link} target='_blank' rel="noopener noreferrer"><h3>{recipe.name}</h3></a>
                   <img src={recipe.image} alt={recipe.name} />
                </div>
            </div>
        );
    }
}

export default Recipe;
