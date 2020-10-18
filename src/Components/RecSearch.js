import React, { Component } from 'react';

class RecSearch extends Component {
    state = {
        searchTxt: '',
        minRating: '0.6',
        maxPrice: '100'
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getWineRec(this.state.searchTxt, this.state.maxPrice, this.state.minRating)
        document.getElementById("rec-search-form").reset()
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }

    setPrice = (e) => {
        this.setState({ maxPrice: e.target.value })
        console.log(e.target.value)
    }

    setRating = (e) => {
        this.setState({ minRating: e.target.value })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="rec-search">
                <form id='rec-search-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <input type='text' placeholder='Enter a varietal' onChange={(e) => this.handleChange(e)} />
                    <select required onChange={(e) => this.setRating(e)} name="minRating" id="minRating" defaultValue="0.6">
                        <option value="" disabled >Select minimum rating:</option>
                        <option value="0.2">1 star</option>
                        <option value="0.4">2 stars</option>
                        <option value="0.6">3 stars</option>
                        <option value="0.8">4 stars</option>
                    </select>
                    <select required onChange={(e) => this.setPrice(e)} name="maxPrice" id="maxPrice" defaultValue='100'>
                        <option value="" disabled >Select price range:</option>
                        <option value="15">under $15</option>
                        <option value="30">under $30</option>
                        <option value="60">under $60</option>
                        <option value="100">under $100</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default RecSearch;
