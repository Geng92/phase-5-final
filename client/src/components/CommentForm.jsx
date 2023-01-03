import React, {useState} from 'react'

const emptyForm = {
    body: ""
}
export default function CommentForm({ post, addComment }) {
    const [ formData, setFormData ] = useState(emptyForm);
    const {id} = post

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
          rider_id: formData.rider_id,
          body: formData.body,
          likes: formData.likes
        }
        fetch(`/comments`, {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({newComment})
        })
        .then((res) => res.json())
        .then((newComment) => {
          addComment(newComment)
      });
        setFormData(emptyForm)
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
        <button onClick={handleSubmit}>add comment</button>
      </form>
    </div>
  )
}
