import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Items from "../Item/Item";
import "./ItemList.css";

function ItemsList() {
  const { filteredItems, items } = useSelector((store) => store.item);
  const user = useSelector((store) => store.user);


console.log(user, "user")

console.log(filteredItems, "filtered!")

const filteredItemsByUser = filteredItems.filter(item => item.user_id === user.id)





  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS", data: params.category });
  }, []);



  const searchItem = (e) => {
    const value = e.target.value;
    dispatch({ type: "GET_FILTERED_ITEMS", data: value });
  };

  if (items) {
    return (
      <div className="items">
        <input type="text" onChange={searchItem} placeholder="search item..." />

        <h2>Category: {params.category}</h2>
        Items
        {filteredItemsByUser.map((item) => (
         <Items key={item.id} item= {item} /> 
        ))}
      </div>
    );
  } else {
    return (
      <div className="items not-found">
        <p>items not found</p>
      </div>
    );
  }
}

export default ItemsList;
