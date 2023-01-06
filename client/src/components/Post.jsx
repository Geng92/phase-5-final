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
  const [ isVideo, setIsVideo ] = useState([])
  const [ comments, setComments] = useState([post.comments])
  const {id, thumbnail, clip, filmed_by, date, likes } = post
  
  const postComments = post.comments.filter((comment) => comment.post_id == post.id )

  const embedURL = clip.substr(32)

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

    const switchToVideo = () => {
      setIsVideo(isVideo => !isVideo)
    }
  
    // const embedVideo = (link) => {
    //   const link = `https://www.youtube.com/watch?v=${linkToClip}` 
    //   const embed = link.split("=")
    //   const embedUrl = "https://www.youtube.com/embed/"+embed[1]
    // }
    return (
    <div class="flex flex-row border border-indigo-100 shadow-lg round object-none object-center bg-blue-200 w-full h-full">
    <div class="text-center">
      { isVideo ? 
      <img class="object-none object-center bg-black-300 w-5/8 " src={thumbnail} alt="thumbnail" />
      : <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${embedURL}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      >
      </iframe> }
      {isVideo ?
      <button onClick={switchToVideo} class="text-xl hover:text-red-600 hover:font-bold" >Check It Out!</button>
      : null}
    </div>

      <div class="w-1/3 flex flex-col">
        <div class="h-1/5 text-center text-xl my-3">  
          Filmed by: {filmed_by}
        </div>
        <div class="h-1/5 text-center text-xl my-3">
          {date}
        </div>
      {/* <button class="block text-sm font-medium text-gray-700" onClick={handleEditClick}>
        Edit Post
      </button> */}
        <div class="px-30 h-1/5 text-center text-md ">
          <button class="px-auto py-auto hover:bg-blue-300 hover:border-2 border-slate-300 rounded-xl" onClick={handleLike} >
             Likes: {likes} 
          </button>
        </div>
        { user ? <button class="h-1/5 text-xl hover:bg-red-600 hover:text-white rounded-lg" onClick={handleDeleteClick}>
          Delete
        </button> : null }
      </div>
        <CommentsContainer 
          post={post}
          setPosts={setPosts} 
          comments={postComments}
          setComments={setComments}
          user={user}
          />
    </div>
  )
}