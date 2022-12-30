import React from 'react';
import Rider from "./Rider";

export default function RidersGallery({ riders, searchQuery, setSearchQuery }) {
    
    const handleOnChange = (e) => setSearchQuery(e.target.value);

    const riderCards = riders.map((rider) => 
        < Rider
            key={rider.id}
            id={rider.id}
            rider={rider} 
        />
    )
    
  return (
    <div>
        <input 
            type="text" 
            placeholder="search riders..." 
            onChange={handleOnChange}
            value={searchQuery} 
        />
        Rider
        {riderCards}
    </div>
  )
}