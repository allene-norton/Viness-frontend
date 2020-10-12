import React, { Component } from 'react';

class FoodSearch extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getFoodPair(this.state.searchTxt)
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="pair-search">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' placeholder='Enter a varietal' onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default FoodSearch;
