import React from 'react'

export default function RiderDetail({ rider }) {
    if (!rider) return null;

    const { name, instagram, image, city, frame, bio, age, professional } = rider;

    return (
        <div>
            Rider
            {name}
            {instagram}
            {image}
            {city}
            {frame}
            {bio}
            {age}
            {professional}
        </div>
    )
}