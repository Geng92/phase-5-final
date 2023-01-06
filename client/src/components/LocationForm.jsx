import React, { useState } from 'react'

export default function LocationForm({ locations, setLocation }) {
    const [formData, setFormData ] = useState([])

    const handleAddLocation = (newLocation) => {
        setLocation([...locations, newLocation])
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
            [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLocation = {
          name: formData.name,
          description: formData.description,
          latitude: formData.latitude,
          longitude: formData.longitude,
          exists: formData.exists
        }
        fetch(`/locations`, {
          method: 'POST',
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(newLocation)
        })
        .then((res) => res.json())
        .then((data) => {
          handleAddLocation(data)
      });
        setFormData([])
      }

  return (
    <div class="bg-white w-full shadow rounded-lg p-5">
      <label class="block text-xl my-3 text-center font-medium text-gray-700">
        Add a New Location 
      </label>
        <form onSubmit={handleSubmit} class="bg-gray-200 w-full rounded-lg shadow border p-2">
            <div class="flex flex-row">
            <div class="w-1/5 text-center rounded-lg">   
            <input
                class="rounded-lg"
                name='name'
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
            >
            </input>
            </div>
            <div class="w-1/5 text-center rounded-lg">
            <input
                class="rounded-lg"
                name='description'
                type='text'
                placeholder='Describe...'
                value={formData.description}
                onChange={handleChange}
            >
            </input>
            </div>
            <div class="w-1/5 text-center ">

            <select
                class="rounded-lg"
                name='exists'
                onChange={handleChange}
                >
                <option class="rounded-lg text-center" value={true}>Still Exists?</option>
                <option class="rounded-lg text-center" value={false}>Gone Forever</option>
            </select>
            </div>
            <div class="w-1/5 text-center rounded-lg">

            <input
                class="py-2 rounded-lg text-center border border-2 border-slate-400"
                name='latitude'
                type='decimal'
                placeholder='Latitude'
                value={formData.latitude}
                onChange={handleChange}
                >
            </input>
            </div>
            <div class="w-1/5 text-center rounded-lg">

            <input
                class=" py-2 rounded-lg text-center border border-2 border-slate-400"
                name='longitude'
                type='decimal'
                placeholder='Longitude'
                value={formData.longitude}
                onChange={handleChange}
                >
            </input>
            </div>

            </div>
        </form>
    </div>
  )
}