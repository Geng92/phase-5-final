import React from 'react'

const emptyForm = {
    body: ""
}
export default function CommentForm() {
    const [ formData, setFormData ] = useState(emptyForm);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
          [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/comments`, {
          method: 'POST',
          headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({...formData})
        })
        .then((res) => res.json())
        .then((newComment) => {
          addTrack(newComment)
      });
        setFormData(emptyForm)
      }
  return (
    <div>
        CommentForm
        <input
            name='body'
            type='text'
            placeholder='Comment here...'
            value={formData.body}
            onChange={handleChange}
        >
        </input>
    </div>
  )
}