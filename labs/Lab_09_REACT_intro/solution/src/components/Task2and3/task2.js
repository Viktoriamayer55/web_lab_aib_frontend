import React, { useState } from "react";
import PostItem from "./task2item";
import PostForm from "./task3";
const Post = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Василий Пупкин',
     text:'Каждый может кинуть камень в волка, но не каждый может кинуть волка в камень',
     like: true },
    { id: 2, username: 'Жанна Аркадьевна' , 
    text: 'С утра хотела быть доброй, но к обеду отпустило!', 
    like: false },
    { id: 3, username: 'Великий мудрец' , 
    text: 'Не убивай кринжовую часть себя, убей ту, которая кринжует' , 
    like: true },
    { id: 4, username: 'Владимир Далекий',
     text: 'Я не далеко!',
      like: false },
  ]);
  const likePost = (postclick) => {
    if (postclick) {
      // setPosts([posts[post.id]]);
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };
  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <div className="postFlex">
      <div>
        <PostForm create={createPost} posts={posts} />
      </div>
      <div>
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.id}
            likes={likePost}
            remove={removePost}
          />
        ))}
      </div>
    </div>
  );
};
export default Post;