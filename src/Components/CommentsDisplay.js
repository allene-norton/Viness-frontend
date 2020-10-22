import React, { Component } from 'react'
import CommentJs from './Comment'
import { Comment, Header } from 'semantic-ui-react'


class CommentsDisplay extends Component {
    renderComments = () => {
        if (this.props.comments.length >= 1) {
            return this.props.comments.map(comment => <CommentJs key={comment.id} comment={comment} deleteComment={this.props.deleteComment} getUserWines={this.props.getUserWines}/>)
        } else if(this.props.comments === undefined) { return undefined }
        else if (this.props.comments.length < 1) {return <p>Be the first to leave a comment!</p>}
        else {return undefined}
    }

    render() {
        return (
            <div className='comments-display'>
                {console.log(this.props.comments)}
                <Comment.Group size='large'>
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

   