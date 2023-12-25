import React, {useState} from 'react'
import './post.css'
import App from './App'

const Post = (props) =>{
   const[posts, setPost] = useState([{
    id: 1,
    nameUser: 'Василий Пупкин',
    postText: 'Каждый может кинуть камень в волка, но не каждый может кинуть волка в камень',
    like: false

},
{
    id: 2,
    nameUser: 'Жанна Аркадьевна',
    postText: 'С утра хотела быть доброй, но к обеду отпустило!',
    like: false
},
{
    id: 3,
    nameUser: 'Великий мудрец',
    postText: 'Не убивай кринжовую часть себя, убей ту, которая кринжует',
    like: false
},
{
    id: 4,
    nameUser: 'Владимир Далекий',
    postText: 'Я не далеко!',
    like: false
}
])
const likePost = (click) =>{
    if(click) {
        const update = posts.map((post)=>{
            if(post.id === click.id) return {...post, like: !post.like}
            return post
        })
        setPost(update)
    }

}
  
return (
    <div className='postFlex'>
        <div>
            {posts.map((post) =>(
                <App
                post={post}
                key={post.id}
                likes={likePost}
              
              />
            ))}
        </div>
    </div>
)
}
export default Post