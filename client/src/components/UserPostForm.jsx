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
    <div class="bg-gray-100 my-3 w-full shadow rounded-lg p-5">
      <label class="block text-sm text-center font-medium text-gray-700">
        Create a Post 
      </label>
      <form onSubmit={handleSubmit} class="bg-gray-200 w-full rounded-lg shadow border p-2">
        <div class="flex flex-row">
        {/* // newPost ? 'add post' : null  < hide show form */}
          <div class="w-1/5">
            <input
              name='thumbnail'
              type='text'
              placeholder='thumbnail...'
              value={formData.thumbnail}
              onChange={handleChange}
              class="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"  
            >
            </input>
          </div>
          <div class="w-1/5">
            <input
              name='clip'
              type='text'
              placeholder='link to clip'
              value={formData.clip}
              onChange={handleChange}
              class="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
            </input>
          </div>
          <div class="w-1/5">
            <input
              name='filmed_by'
              type='text'
              placeholder='who filmed...'
              value={formData.filmed_by}
              onChange={handleChange}
              class="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
            </input>
          </div>
          <div class="w-1/5 bg-gray-200 rounded-sm">
            <input
              name='date'
              type='date'
              placeholder='date'
              value={formData.date}
              onChange={handleChange}
              class="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
            </input>
          </div>
          <div class="w-1/5">
            <button 
              type="submit" 
              class="bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}