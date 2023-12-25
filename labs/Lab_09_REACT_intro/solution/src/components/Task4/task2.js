import React, { useState, useContext, useEffect } from "react";
import PostItem from "./task2item";
import PostForm from "./task3";
import { Context } from "./context";
import PostTags from "./postTags";
const PostFour = () => {
  const [sortedPosts, setSortedPosts] = useState([{}]);
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
  const [tags, setTags] = useState([{ tag: "", isActive: false }]);
  useEffect(() => {
    const newTags = posts.reduce((uniqueTags, item) => {
      const tagExists = uniqueTags.some((tagObj) => tagObj.tag === item.tag);
      if (!tagExists) {
        return [...uniqueTags, { tag: item.tag, isActive: false }];
      }
      return uniqueTags;
    }, []);
    setTags(newTags);
    setSortedPosts(posts);
  }, [posts]);
  console.log(tags);
  const likePost = (postclick) => {
    if (postclick) {
      const update = posts.map((post) => {
        if (post.id === postclick.id) return { ...post, like: !post.like };
        return post;
      });
      setPosts(update);
    }
  };
  const sortTags = (clickedTag) => {
    const updatedTags = tags.map((tag) => {
      if (tag.tag === clickedTag.tag) {
        return { ...tag, isActive: !tag.isActive };
      } else {
        return { ...tag, isActive: false };
      }
      return tag;
    });
    setTags(updatedTags);

    const filteredPosts = posts.filter((post) => post.tag === clickedTag.tag);
    setSortedPosts(filteredPosts);
  };
  const removePost = (post) => {
    console.log(post.id);
    setPosts(posts.filter((item) => item.id !== post.id));
  };
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  return (
    <Context.Provider
      value={{
        removePost,
        createPost,
        sortTags,
      }}
    >
      <div className="postFlex">
        <div>
          <PostForm create={createPost} posts={posts} />
        </div>
        <div>
          Тэги
          {tags.map((item) => (
            <PostTags tags={item} />
          ))}
          {sortedPosts.map((post) => (
            <PostItem
              post={post}
              key={post.id}
              likes={likePost}
              remove={removePost}
            />
          ))}
        </div>
      </div>
    </Context.Provider>
  );
};
export default PostFour;