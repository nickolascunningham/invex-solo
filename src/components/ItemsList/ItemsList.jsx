import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Items from '../Item/Item';

function ItemsList(props) {
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Items');
  
    return (
      <div>
          { props.items.map(( item )=>( <Items item={ item }/>))}
      </div>
    );
  }
  
  export default ItemsList;
  