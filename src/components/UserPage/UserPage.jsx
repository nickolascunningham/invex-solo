import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const categories = useSelector((store) => store.categories);

  const dispatch = useDispatch();

  console.log("categories", categories);

  useEffect(() => {
    dispatch({ type: "FETCH_CATEGORIES" });
  }, []);

  if (categories && categories.length > 0) {
    return (
      <div className="container">
        {categories.map((category) => (
          <div key={category.category_id}>Title: {category.title}</div>
        ))}
      </div>
    );
  } else {
    return <p>no category available</p>;
  }
}

// this allows us to use <App /> in index.js
export default UserPage;
