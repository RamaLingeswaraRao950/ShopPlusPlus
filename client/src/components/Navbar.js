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
        transition: 'color 0.3s ease, text-decoration 0.3s ease', // Add transition for smooth color and text-decoration change
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; // Underline on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none'; // Remove underline when not hovered
      }}
    >
      ShopPlusPlus+++
    </Link>
        </span>

        <div className="navbar">
           {/* <Search onSearchChange={handleSearchChange} />  */}
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
        transition: 'color 0.3s ease, text-decoration 0.3s ease', // Add transition for smooth color and text-decoration change
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; // Underline on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none'; // Remove underline when not hovered
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
        transition: 'color 0.3s ease, text-decoration 0.3s ease', // Add transition for smooth color and text-decoration change
      }}
      onMouseEnter={(e) => {
        e.target.style.textDecoration = 'underline'; // Underline on hover
      }}
      onMouseLeave={(e) => {
        e.target.style.textDecoration = 'none'; // Remove underline when not hovered
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
