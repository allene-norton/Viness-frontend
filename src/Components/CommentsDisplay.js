import React, { Component } from 'react'
import Comment from './Comment'

class CommentsDisplay extends Component {
    renderComments = () => {
        if (this.props.comments.length >= 1) {
        return this.props.comments.map(comment => <Comment key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />)
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