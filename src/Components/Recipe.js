import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

class Recipe extends Component {

    render() {
        console.log(this.props.recipe)
        let recipe = this.props.recipe
        return (
            <div className="recipe">
                <Card href={recipe.link} target='_blank'>
                    <Image src={recipe.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{recipe.name}</Card.Header>
                    </Card.Content>
                </Card>
                {/* <a href={recipe.link} target='_blank' rel="noopener noreferrer"><h3>{recipe.name}</h3></a>
                   <img src={recipe.image} alt={recipe.name} /> */}
            </div>
        );
    }
}

export default Recipe;

