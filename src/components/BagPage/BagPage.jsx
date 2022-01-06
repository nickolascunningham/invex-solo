import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const user = useSelector((store) => store.user);
  const { bags } = useSelector((store) => store.bag);

  const userBags = bags.filter(bag => bag.user_id === user.id)

  console.log(userBags, "userbags ====")

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    
    // reducer ==> makes api call => delete from server(db) => updates redux store => updates the component
    dispatch({
      type: "DELETE_BAG",
      data: id,
    });
  };





  if(userBags && userBags.length){
  return (
    <div className="container">
        {
          userBags && userBags.map(bag => (
            <div className="item bag">
               <p>Category: {bag.category}</p>
                  <p>Title{bag.title}</p>
                  <p>Description: {bag.description}</p> 
                  <button onClick={() => handleDelete(bag.id)}>Delete</button>
            </div>
          ))
        }
   
    </div>
  )
      }else{
              return (
                <h1 style={{textAlign: "center"}}>No bag available!</h1>
              )
      }
}

export default InfoPage;
