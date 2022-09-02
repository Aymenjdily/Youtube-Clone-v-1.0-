import React from 'react'
import { categories } from '../../../Constants/Constants'

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <div className='flex md:flex-col flex-row overflow-y md:h-[95%] h-auto'>
      {
        categories.map((category) => (
            <button
                className={`category-btn text-white ${ category.name === selectedCategory ? "bg-red" : "category-btn" }`}
                key={category.name}
                onClick={() => setselectedCategory(category.name)}
            >
                <span className={`${category.name === selectedCategory ? "text-white" : "text-red"} mr-6`}>{category.icon}</span>
                <span className={`${category.name === selectedCategory ? "opacity-100" : "opacity-50"}`}>{category.name}</span>
            </button>
        ))
      }
    </div>
  )
}

export default Sidebar
