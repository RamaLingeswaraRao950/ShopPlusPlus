import React from 'react';
import '../styles/navbar.css';
import Search from './Search';
import { Link } from 'react-router-dom';
const Navbar = ({  size, setShow, handleSearchChange }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
        <Link
      to='/'
      style={{
        color: 'wheat',
        fontSize: '33px',
        textDecoration: 'none',
        transition: 'color 0.3s ease, text-decoration 0.3s ease', 
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; 
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none';
      }}
    >
      ShopPlusPlus+++
    </Link>
        </span>

        <div className="navbar">
           
           <p><i>R U Ready Friend ??</i></p>
        </div>

        <div className="navbar">
  <h2>
    <Link
      to='/login'
      style={{
        color: 'wheat',
        fontSize: '27px',
        textDecoration: 'none',
        transition: 'color 0.3s ease, text-decoration 0.3s ease', 
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; 
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none'; 
      }}
    >
      Login/Register
    </Link>
  </h2>
</div>


        <div className="cart" onClick={() => setShow(false)}>
          <span>
          <i className="fas fa-cart-plus"
      style={{
        color: 'wheat',
        fontSize: '30px',
        textDecoration: 'none',
        transition: 'color 0.3s ease, text-decoration 0.3s ease', 
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; 
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none'; 
      }}
    >
      cart
    </i>
          </span>
          <span>{size}</span>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
