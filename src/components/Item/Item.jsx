import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(item.id);
    // reducer ==> makes api call => delete from server(db) => updates redux store => updates the component
    dispatch({
      type: "DELETE_ITEM",
      data: item.id,
    });
    
  };
  return (
    <div className="item">
      <p>{item.title}</p>
      <p>Description: {item.description}</p>

      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Item;
