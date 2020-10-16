import React from 'react';


function Comment(props) {
    let comment = props.comment
  return (
      <div className="comment">
          <h4>{comment.username}</h4>
          <h5>{comment.body}</h5>
      </div>
  );
}

export default Comment;
