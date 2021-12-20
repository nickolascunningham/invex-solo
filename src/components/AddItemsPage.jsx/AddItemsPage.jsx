import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddItemsPage(props) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch( { type: 'FETCH_ADDITEM'} );
  }, [])
 
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Add Items');

  return (
    <div>
      <h2>{heading}</h2>
      <p>{ JSON.stringify( store ) }</p>
    </div>
  );
}

export default AddItemsPage;
