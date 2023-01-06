import React, {useState} from 'react'

// const emptyForm = {
//     body: ""
// }
export default function CommentForm({ user, post, addComment }) {
    const [ formData, setFormData ] = useState("");
    const { id } = post
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment ={
          post_id: id,
          rider_id: user.id,
          body: formData.body,
          likes: formData.likes
        }
        fetch(`/comments`, {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(newComment)
        })
        .then((res) => res.json())
        .then((data) => {
          addComment(data)
      });
        // setFormData(emptyForm)
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            name='body'
            type='text'
            placeholder='Comment here...'
            value={formData.body}
            onChange={handleChange}
            class="mt-1 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            >
        </input>
        <button 
          type="submit"
          class="bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
        >
        add comment
        </button>
      </form>
    </div>
  )
}
