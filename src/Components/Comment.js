import React from 'react';
import { Comment } from 'semantic-ui-react'


function CommentJs(props) {
    let comment = props.comment

    const handleDelete = () => {
        props.deleteComment(props.comment.id)
    }
    return (
        <div className="commentJs">
            <Comment>
                <Comment.Avatar src={comment.img} />
                <Comment.Content>
                    <Comment.Author>{comment.username}</Comment.Author>
                    {/* <Comment.Metadata>
                        <span>Today at 5:42PM</span>
                    </Comment.Metadata> */}
                    <Comment.Text>{comment.body}</Comment.Text>
                    {/* <Comment.Actions>
                        <a>Reply</a>
                    </Comment.Actions> */}
                </Comment.Content>
            </Comment>
            {/* <h4>{comment.username}</h4>
            <h5>{comment.body}</h5>
            <button onClick={handleDelete} >delete</button> */}
        </div>
    );
}

export default CommentJs;
