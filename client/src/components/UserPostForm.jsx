import React, {useState} from 'react'

// const emptyForm = {
//     thumbnail: '',
//     clip: '',
//     filmed_by: ''
// }
export default function UserPostForm({ user, updatePosts }) {
    const [ formData, setFormData ] = useState("");
    const { id } = user;

    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost ={
        location_id: formData.location_id,
        rider_id: id,
        thumbnail: formData.thumbnail,
        clip: formData.clip,
        filmed_by: formData.filmed_by,
        date: formData.date     
      }
      fetch(`/posts`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({...formData})
      })
      .then((res) => res.json())
      .then((newPost) => {
        updatePosts(newPost)
      });
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }
    
    
    return (
      <div>
      <form onSubmit={handleSubmit}>
        {/* // newPost ? 'add post' : null  < hide show form */}
        <input
            name='body'
            type='text'
            placeholder='thumbnail...'
            value={formData.thumbnail}
            onChange={handleChange}
            >
        </input>
        <input
            name='clip'
            type='text'
            placeholder='link to clip'
            value={formData.clip}
            onChange={handleChange}
            >
        </input>
        <input
            name='filmer'
            type='text'
            placeholder='who filmed...'
            value={formData.filmed_by}
            onChange={handleChange}
            >
        </input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}