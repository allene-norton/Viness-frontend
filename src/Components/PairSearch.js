import React, { Component } from 'react';

class PairSearch extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getWinePair(this.state.searchTxt)
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="pair-search">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' placeholder='Enter a dish, ingredient, or cuisine type' onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default PairSearch;
