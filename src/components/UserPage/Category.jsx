import React from 'react'
import { useHistory } from 'react-router-dom'

const Category = ({category}) => {


    const history = useHistory()

    const handleClick = () => {
       console.log(category.title)
       history.push(`/items/${category.title}`)
    }

    return (
        <div onClick={handleClick} className="category">
           <p>{category.title} </p> 
            </div>
    )
}

export default Category
