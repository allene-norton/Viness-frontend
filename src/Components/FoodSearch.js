import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


class FoodSearch extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.clearRecipes()
        this.props.getFoodPair(this.state.searchTxt)
        document.getElementById("food-search-form").reset()
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="food-search">
                <Form id='food-search-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Input placeholder='Enter a varietal' onChange={(e) => this.handleChange(e)} />
                        <Form.Button>Submit</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default FoodSearch;
