import React, { Component } from 'react'
import CommentsDisplay from '../Components/CommentsDisplay'
import CommentsForm from '../Components/CommentsForm'

class CommentsContainer extends Component {

    render() {
        return (
            <div className='comments-container'>
                <h3>I'm the comments container</h3>
                <CommentsDisplay />
                <CommentsForm postComment={this.props.postComment} wine={this.props.wine} />
            </div>
        )
    }
}


export default CommentsContainer