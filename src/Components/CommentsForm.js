import React, { Component } from 'react'

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
        this.props.handlePost({...this.state, username: JSON.parse(sessionStorage.getItem('user')).display_name})
        document.getElementById("comment-form").reset()
    }

    render() {
        return (
            <div className='comments-form'>
                <h3>I'm the comments form</h3>
                <form id='comment-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <input onChange={(e) => this.handleChange(e)} type='text' placeholder='add a comment' />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}


export default CommentsForm