import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Items from '../Item/Item';
import "./ItemList.css"

function ItemsList(props) {
    const {items} = useSelector((store) => store.item);

   

    const dispatch = useDispatch();

      const params = useParams()

      const filteredItems = items.filter(item => item.category.toLowerCase() === params.category.toLowerCase())

    // console.log(filteredItems, "filteredItems")

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, []);
   
  if(filteredItems && filteredItems.length > 0 ){
    return (
      <div className="items">
        <h2>Category: {params.category}</h2>
          {filteredItems.map(( item )=>( <Items key={item.id} item={ item }/>))}
      </div>
    )
  }else{
    return (
      <div className="items not-found">
    <p >items not found</p>
    </div>
    )
  }
  }
  
  export default ItemsList;
  