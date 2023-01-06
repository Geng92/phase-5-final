import React, { useState } from 'react'
import CommentsContainer from './CommentsContainer'

export default function Post({ 
    user, 
    post, 
    setPosts, 
    deletePost, 
    onUpdatePost, 
    onEditPost 
  }) 
{
  // const [ link, setLink ] = useState()
  // const [ comments, setComments] = useState([post.comments])
  const {id, thumbnail, clip, filmed_by, date, likes } = post
  
  const postComments = post.comments.filter((comment) => comment.post_id == post.id )

    const handleLike = () => {
      fetch(`posts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          likes: likes + 1
        })
      })
        .then(res => res.json())
        .then(updatedPost => {
          onUpdatePost(updatedPost)
        })
    };

    const handleEditClick = () => {
      onEditPost(post);
    };

    const handleDeleteClick = () => {
      deletePost(id)
      fetch(`/posts/${id}`, {
        method: "DELETE"
      })
    };
  
    // const embedVideo = (link) => {
    //   const link = `https://www.youtube.com/watch?v=${linkToClip}` 
    //   const embed = link.split("=")
    //   const embedUrl = "https://www.youtube.com/embed/"+embed[1]
    // }
    return (
    <div class=" col-end-7 col-span-2">
    
      <img src={thumbnail} />
          {filmed_by}
        <div>
          {date}
        </div>
      <button class="block text-sm font-medium text-gray-700" onClick={handleEditClick}>
        Edit Post
      </button>
      <button onClick={handleLike} >
        👏{likes}
      </button>
        <CommentsContainer 
          post={post}
          setPosts={setPosts} 
          comments={postComments}
          // setComments={setComments}
          user={user}
        />
        <div></div>
      { user ? <button onClick={handleDeleteClick}>
        X
      </button> : null }
    </div>
  )
}