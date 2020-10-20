import React, { Component } from 'react';
import { Form} from 'semantic-ui-react'

class PairSearch extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getWinePair(this.state.searchTxt)
        document.getElementById("pair-search-form").reset()
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="pair-search">
                <Form id='pair-search-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                    <Form.Input placeholder='Enter a dish, ingredient, or cuisine type' onChange={(e) => this.handleChange(e)}/>
                    <Form.Button>Submit</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default PairSearch;
