import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './AddItemsPage.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddItemsPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);
 
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const categories = useSelector((store) => store.categories);
  const {add_item_success} = useSelector((store) => store.item)

  console.log(add_item_success, "add_item_success")

  const [item, setItem] = useState({
    title: "",
    description: "",
    category: null
  });

  const handleChange = e => {
    setItem({...item, [e.target.name]: e.target.value})
  }

  const clearForm = () => {
    setItem({
      title: "",
      description: "",
      category: null
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(item.category === null){
      alert("please select a category to continue")
    }else{
      console.log(item)
      dispatch({ type: "ADD_ITEM", data: item}) 
          alert("successfully added!") 
       
      clearForm()
    }
    
  }

  return (
    <div className='add-item'>
      <h2>Add Item</h2>
       <form onSubmit={handleSubmit}>
         <div className='input-text'>
         <label>Title</label> 
         <input required value={item.title} onChange={handleChange} type="text" name="title" />
         </div>
       
       <div className='input-text'>
       <label>Description</label> 
       <input required value={item.description} onChange={handleChange} type="text" name="description" />
       </div>

       <select onChange={handleChange} name="category">  
       <option selected='selected' value={item.category}>Select category</option>
               {categories && categories.map(category => (
                 <option value={category.value}>{category.title}</option>
               ))}
       </select>
       
       <button>Add Item</button>

       </form>
    </div>
  );
}

export default AddItemsPage;
