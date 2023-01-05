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
  const [ comments, setComments] = useState([post.comments])
  const {id, thumbnail, clip, filmed_by, date, likes} = post
  
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
  
    return (
    <div class="w-full rounded-md border-gray-200 bg-blue text-sm text-gray-700 shadow-sm">
      <img src={thumbnail} />
        <img src={clip} />
          {filmed_by}
        <div>
          {date}
        </div>
        <div>
          {likes}
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
          setComments={setComments}
          user={user}
        />
      <button onClick={handleDeleteClick}>
        X
      </button>
    </div>
  )
}