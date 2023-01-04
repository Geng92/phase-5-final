import React, {useState} from 'react'

// const emptyForm = {
//     body: ""
// }
export default function CommentForm({ user, post, addComment }) {
    const [ formData, setFormData ] = useState("");
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment ={
          post_id: post.id,
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
            >
        </input>
        <button type="submit">add comment</button>
      </form>
    </div>
  )
}
