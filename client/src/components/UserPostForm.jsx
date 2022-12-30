import React, {useState} from 'react'

const emptyForm = {
    thumbnail: '',
    clip: '',
    filmed_by: ''
}
export default function UserPostForm({ updatePosts }) {
    const [ formData, setFormData ] = useState(emptyForm);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`/posts`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({...formData})
      })
      .then((res) => res.json())
      .then((newPost) => {
        updatePosts(newPost)
    });
      setFormData(emptyForm)
    }


  return (
    <div>
        UserContainer

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
            value={formData.filmer}
            onChange={handleChange}
        >
        </input>
    </div>
  )
}