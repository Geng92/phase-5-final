import React, {useState} from 'react'

// const emptyForm = {
//     thumbnail: '',
//     clip: '',
//     filmed_by: ''
// }
export default function UserPostForm({ user, onNewPost }) {
    const [ formData, setFormData ] = useState("");
    const { id } = user;

    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost ={
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
        body: JSON.stringify(newPost)
      })
      .then((res) => res.json())
      .then((data) => {
        onNewPost(data)
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
            name='thumbnail'
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
            name='filmed_by'
            type='text'
            placeholder='who filmed...'
            value={formData.filmed_by}
            onChange={handleChange}
            >
        </input>
        <input
            name='date'
            type='datetime'
            placeholder='date'
            value={formData.date}
            onChange={handleChange}
            >
        </input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}