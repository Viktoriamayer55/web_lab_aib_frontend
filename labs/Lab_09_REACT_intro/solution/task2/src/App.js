import './App.css';
import React from 'react';
import Header from './Header';

const App = (props)=>{
  let like = props.post.like?(
    <div className="red btn-click" onClick={() => props.likes(props.post)}>
    like post 
  </div>
) : (
  <div className="black btn-click" onClick={() => props.likes(props.post)}>
    dislike post
  </div>
);
return (
  <div className="post">
    <div>{props.post.id}</div>
    <div>{props.post.username}</div>
    <div>{props.post.text}</div>
    {like}
    </div>
)
}

export default App;
