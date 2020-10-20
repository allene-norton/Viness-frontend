import React, { Component } from 'react'
import CommentJs from './Comment'
import { Comment, Header } from 'semantic-ui-react'


class CommentsDisplay extends Component {
    renderComments = () => {
        if (this.props.comments.length >= 1) {
            console.log(this.props.comments[0].img)
            return this.props.comments.map(comment => <CommentJs key={comment.id} comment={comment} deleteComment={this.props.deleteComment} />)
        } else { return undefined }
    }

    render() {
        return (
            <div className='comments-display'>
                <Comment.Group size='medium'>
                    <Header as='h3' dividing>
                        Comments
                    </Header>
                        {this.renderComments()}
                </Comment.Group>
            </div>
        )
    }
}


export default CommentsDisplay

   