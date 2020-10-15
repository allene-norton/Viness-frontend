import React, { Component } from 'react'

class CommentsDisplay extends Component {
    renderComments = () => {
        if (this.props.comments.length >= 1) {
        return this.props.comments.map(comment => <li key={comment.id}>user: {comment.username} <br/> comment: {comment.body}</li>)
        } else {return undefined}
    }

    render() {
        return (
            <div className='comments-form'>
                <h3>I'm the comments display</h3>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}


export default CommentsDisplay