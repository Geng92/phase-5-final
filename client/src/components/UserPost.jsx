// import React, { useState, useEffect } from 'react'
// import CommentsContainer from './CommentsContainer';

// export default function UserPost( { user, post, setPosts, deletePost, onUpdatePost, onEditPost } ) {
//   const {id, thumbnail, clip, filmed_by, date, likes} = post
  
//     const handleLike = () => {
//       fetch(`posts/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           likes: likes + 1
//         })
//       })
//         .then(res => res.json())
//         .then(updatedPost => {
//           onUpdatePost(updatedPost)
//         })
//     };

//     const handleEditClick = () => {
//       onEditPost(post);
//     };

//     const handleDeleteClick = () => {
//       deletePost(id)
//       fetch(`/posts/${id}`, {
//         method: "DELETE"
//       })
//     };
//   return (
//     <div>
//     <img src={thumbnail} />
//     {clip}
//     {filmed_by}
//     {date}
//     {likes}
//     <button onClick={handleEditClick}>
//         Edit
//       </button>
//     <button onClick={handleLike} >
//       👏{likes}
//     </button>
//     <CommentsContainer 
//       post={post}
//       user={user} 
//       setPosts={setPosts}
//     />
//     <button onClick={handleDeleteClick}>X</button>
// </div>
//   )
// }