import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Items from '../Item/Item';

function ItemsList(props) {
    const {items} = useSelector((store) => store.item);

    
   
  
    return (
      <div>
          { items.map(( item )=>( <Items item={ item }/>))}
      </div>
    );
  }
  
  export default ItemsList;
  