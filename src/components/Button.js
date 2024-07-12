import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="flex px-6 py-2 m-2 bg-gray-200 rounded-lg overscroll-auto">{name}</button>
    </div>
  )
}

export default Button