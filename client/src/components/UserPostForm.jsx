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
      setFormData("")
    }
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }
    
    return (
      <div class="bg-white w-full shadow rounded-lg p-5">
      <form onSubmit={handleSubmit} class="bg-gray-200 w-full rounded-lg shadow border p-2">
        <div>
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

        </div>
        <div class="w-2/3">
        <button type="submit" class="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  )
}