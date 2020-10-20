import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'


class CommentsForm extends Component {
    state = {
        user_id: JSON.parse(sessionStorage.getItem('user')).id,
        wine_id: this.props.wine.id,
        body: ''
    }

    handleChange = (e) => {
        this.setState({body: e.target.value})
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.postComment(this.state)
        this.props.handlePost({...this.state, username: JSON.parse(sessionStorage.getItem('user')).display_name, img: JSON.parse(sessionStorage.getItem('user')).image})
        document.getElementById("comment-form").reset()
    }

    render() {
        return (
            <div className='comments-form'>
                <Form id='comment-form' className='comment-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                    <Form.Input onChange={(e) => this.handleChange(e)} type='text' placeholder='add a comment' />
                    <Form.Button>Submit</Form.Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}


export default CommentsForm