import React from 'react'

export default function Location({location}) {

  const {name, description, longitude, latitude, exists } = location

  return (
    <div class="flex flex-row my-5 mx-18 text-center">
      <div class="w-1/5 mx-2 my-3 py-3 bg-gray-200 hover:bg-slate-300 hover:text-red-600 rounded-lg border border-2 border-slate-600">  
      {name}
      </div>
      <div class="w-1/5 mx-2 my-3 py-3 bg-gray-200 hover:bg-slate-300 hover:text-red-600 rounded-lg border border-2 border-slate-600">  
      {description}
      </div>
      <div class="w-1/5 mx-2 my-3 py-3 bg-gray-200 hover:bg-slate-300 hover:text-red-600 rounded-lg border border-2 border-slate-600">
        {exists ? "Yes" : "No"}
      </div>
      <div class="w-1/5 mx-2 my-3 py-3 bg-gray-200 hover:bg-slate-300 hover:text-red-600 rounded-lg border border-2 border-slate-600">  
      {latitude}
      </div>
      <div class="w-1/5 mx-2 my-3 py-3 bg-gray-200 hover:bg-slate-300 hover:text-red-600 rounded-lg border border-2 border-slate-600">  
      {longitude}
      </div>
    </div>
  )
}
