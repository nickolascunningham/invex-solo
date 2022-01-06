import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Item({ item }) {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);

  const [editItem, setItem] = useState({
    title: item.title,
    description: item.description,
    id: item.id
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleDelete = () => {
    console.log(item.id);
    // reducer ==> makes api call => delete from server(db) => updates redux store => updates the component
    dispatch({
      type: "DELETE_ITEM",
      data: item.id,
    });
  };


  const handleAddToBag = () => {

  
  

  dispatch({
    type: "ADD_BAG",
    data: item
  })
  }

  //grab item => action => server => response => reducer => store

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: "UPDATE_ITEM",
      data: editItem
    })
   setShowEdit(false)
  }
  return (
    <div className="item">
      {!showEdit ? (
        <div>
          <p>{item.title}</p>
          <p>Description: {item.description}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="input-text">
            <label>Title</label>
            <input
              required
              defaultValue={editItem.title || item.title}
              onChange={handleChange}
              type="text"
              name="title"
            />
          </div>

          <div className="input-text">
            <label>Description</label>
            <input
              required
              defaultValue={editItem.description || item.description}
              onChange={handleChange}
              type="text"
              name="description"
            />
          </div>

          <button>Submit</button>
        </form>
      )}

      <div>
        <button onClick={handleDelete}>Delete</button>{" "}
        <button
          onClick={() => {
            setShowEdit(!showEdit);
          }}
        >
          Edit
        </button>
        <button
          onClick={
            handleAddToBag}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default Item;
