import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const { bags } = useSelector((store) => store.bag);



  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Invex</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to={`/bag/${user.id}`}>
              Bag ({bags.length}) 
            </Link>

            <Link className="navLink" to="/add_items">
              Add Items
            </Link>
            <Link className="navLink" to="/about">
          About
        </Link>
            <LogOutButton className="navLink" />
          </>
        )}

       
      </div>
    </div>
  );
}

export default Nav;
