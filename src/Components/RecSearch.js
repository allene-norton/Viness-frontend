import React, { Component } from 'react';
import { Form, Dropdown} from 'semantic-ui-react'

const ratingOpts = [
    { key: '1', text: '1 star', value: '0.2' },
    { key: '2', text: '2 stars', value: '0.4' },
    { key: '3', text: '3 stars', value: '0.6' },
    { key: '4', text: '4 stars', value: '0.8' }
]

const priceOpts = [
    { key: '15', text: 'under $15', value: '15' },
    { key: '30', text: 'under $30', value: '30' },
    { key: '60', text: 'under $60', value: '60' },
    { key: '100', text: 'under $100', value: '100' }
]

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

    handleRating = (e, result) => {
        const { name, value } = result;
        this.setState({
           [name]: value
          });
          console.log(this.state.minRating)
      };

      handlePrice = (e, result) => {
        const { name, value } = result;
        this.setState({
           [name]: value
          });
          console.log(this.state.maxPrice)
      };


    // setPrice = (e) => {
    //     this.setState({ maxPrice: e.target.value })
    //     console.log(e.target.value)
    // }

    // setRating = (e) => {
    //     this.setState({ minRating: e.target.value })
    //     console.log(e.target.value)
    // }
    render() {
        return (
            <div className="rec-search">
                <Form id='rec-search-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Input placeholder='Enter a varietal' onChange={(e) => this.handleChange(e)} />
                        <Form.Field
                            placeholder="Minimum Rating"
                            name="minRating"
                            control={Dropdown}
                            fluid
                            selection
                            onChange={this.handleRating}
                            options={ratingOpts}
                            value={this.state.minRating}
                        />
                        <Form.Field
                            placeholder="Maximum Price"
                            name="maxPrice"
                            control={Dropdown}
                            fluid
                            selection
                            onChange={this.handlePrice}
                            options={priceOpts}
                            value={this.state.maxPrice}
                        />
                        {/* <Form.Select
                            onChange={(e) => this.setRating(e)}
                            placeholder="Minimum Rating"
                            options={ratingOpts}
                        />
                        <Form.Select
                            onChange={(e) => this.setPrice(e)}
                            placeholder="Maximum Price"
                            options={priceOpts}
                        /> */}
                        <Form.Button>Submit</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default RecSearch;
