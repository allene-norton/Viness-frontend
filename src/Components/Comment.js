import React from 'react';


function Comment(props) {
    let comment = props.comment

    const handleDelete = () => {
        props.deleteComment(props.comment.id)
    }
  return (
      <div className="comment">
          <h4>{comment.username}</h4>
          <h5>{comment.body}</h5>
          <button onClick={handleDelete} >delete</button>
      </div>
  );
}

export default Comment;
