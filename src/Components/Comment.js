import React from 'react';
import { Comment } from 'semantic-ui-react'


function CommentJs(props) {
    let comment = props.comment
    let currentUser = JSON.parse(sessionStorage.getItem('user'))

    const renderDelete = () => {
        if (comment.username === currentUser.display_name) {
            
            return <button onClick={handleDelete} >remove</button>     
        } else {
            return undefined
        }
    }

    const handleDelete = () => {
        props.deleteComment(props.comment.id)
        props.getUserWines()
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
                    <Comment.Text>{comment.body}
                    <Comment.Actions className='del-comment'>
                        {renderDelete()}
                    </Comment.Actions>
                    </Comment.Text>
                </Comment.Content>
            </Comment>
            {/* <h4>{comment.username}</h4>
            <h5>{comment.body}</h5>
            <button onClick={handleDelete} >delete</button> */}
        </div>
    );
}

export default CommentJs;
