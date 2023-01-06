import React from 'react'

export default function Location({location}) {

  const {name, description, longitude, latitude } = location

  return (
    <div>
      Location
      {name}
      {description}
      {longitude}
      {latitude}
    </div>
  )
}
