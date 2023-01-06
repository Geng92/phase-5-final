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
  const [ comments, setComments] = useState([post.comments])
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
    <div class="border border-indigo-100 shadow-lg round object-none object-center bg-blue-200 w-full h-full">
    <div>
      <img class="object-none object-center bg-black-300 w-full h-60" src={thumbnail} alt="thumbnail" />
    </div>
      <div class="w-full flex flex-row ">

      <div class="w-1/3 text-center ">  
          Filmed by: {filmed_by}
        </div>
        <div class="w-1/3 text-center">
          {date}
        </div>
      {/* <button class="block text-sm font-medium text-gray-700" onClick={handleEditClick}>
        Edit Post
      </button> */}
      <div class="w-1/3">
      <button onClick={handleLike} >
        👏{likes}
      </button>
      </div>
      </div>
        <CommentsContainer 
          post={post}
          setPosts={setPosts} 
          comments={postComments}
          setComments={setComments}
          user={user}
          />
      { user ? <button onClick={handleDeleteClick}>
        X
      </button> : null }
    </div>
  )
}