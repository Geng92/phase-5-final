import React from 'react';
import Rider from "./Rider";

export default function RidersGallery({ 
    riders, 
    searchQuery, 
    setSearchQuery 
  }) 
{  
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
      <div class="text-center">
        <input 
            type="text" 
            placeholder="search riders..." 
            onChange={handleOnChange}
            value={searchQuery}
            class="mt-1 w-50 h-37 mx-1 rounded-md border-gray-200 bg-white text-xl text-gray-700 shadow-sm"
        />
      </div>
      <div class="grid grid-cols-3">
      {riderCards}
      </div>
    </div>
  )
}