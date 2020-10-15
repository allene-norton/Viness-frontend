import React, { Component } from 'react'
import CommentsDisplay from '../Components/CommentsDisplay'
import CommentsForm from '../Components/CommentsForm'

class CommentsContainer extends Component {
    state = {
        comments: this.props.wine.comments
    }

    handlePost = (comment) => {
        this.setState((prev) => ({comments: [...prev.comments, comment]}))
    }

    render() {
        return (
            <div className='comments-container'>
                <h3>I'm the comments container</h3>
                <CommentsDisplay wine={this.props.wine} comments={this.state.comments} />
                <CommentsForm postComment={this.props.postComment} handlePost={this.handlePost} wine={this.props.wine} />
            </div>
        )
    }
}


export default CommentsContainer