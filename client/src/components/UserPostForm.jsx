import React from 'react'

const emptyForm = {
    thumbnail: '',
    clip: '',
    filmer: ''
}
export default function UserContainer() {
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
        addPost(newPost)
    });
      setFormData(emptyForm)
    }


  return (
    <div>
        UserContainer
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