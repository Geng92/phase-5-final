import React, { useState, useEffect } from 'react'

export default function UserEditPostForm({ postToEdit = {}, onUpdatePost }) {
    const [formData, setFormData ] = useState(postToEdit)

    const { thumbnail, clip, filmed_by, date } = formData
  
    useEffect(() => {
      fetch(`/posts/${postToEdit.id}`)
        .then((res) => res.json())
        .then((post) => setFormData(post));
    }, [postToEdit.id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(formData => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const configObj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      };
  
      fetch(`posts/${postToEdit.id}`, configObj)
        .then((resp) => resp.json())
        .then((updatedPost) => {
          onUpdatePost(updatedPost);
        });
    };

    return (
 
      <div>
        UserEditPostForm
      <form onSubmit={handleSubmit}>
        {/* // newPost ? 'add post' : null  < hide show form */}
        <input
            name='thumbnail'
            type='text'
            placeholder='thumbnail...'
            value={thumbnail}
            onChange={handleChange}
            >
        </input>
        <input
            name='clip'
            type='text'
            placeholder='link to clip'
            value={clip}
            onChange={handleChange}
            >
        </input>
        <input
            name='filmed_by'
            type='text'
            placeholder='who filmed...'
            value={filmed_by}
            onChange={handleChange}
            >
        </input>
        <input
            name='date'
            type='datetime'
            placeholder='date'
            value={date}
            onChange={handleChange}
            >
        </input>
        <button type="submit">Edit Post</button>
      </form> 
      </div>
  )
}