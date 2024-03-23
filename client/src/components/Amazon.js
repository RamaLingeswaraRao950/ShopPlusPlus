import React, { useState } from 'react';
import list from '../list';
import '../styles/amazon.css';
import Cards from './Cards';
import Banner from '../Assets/banner.png';
import Footer from '../Assets/Footer.jpg';
import Search from './Search'; // Import the Search component

const Amazon = ({ handleClick }) => {
  const [filteredItems, setFilteredItems] = useState(list); // State to hold filtered items

  // Function to handle search input change
  const handleSearchChange = (searchInput) => {
    const filtered = list.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <section>
        <Search onSearchChange={handleSearchChange} /> {/* Render the Search component */}
        {filteredItems.map((item) => (
          <Cards item={item} key={item.id} handleClick={handleClick} />
        ))}
      </section>


      <img
        src={Banner}
        alt="Banner"
        style={{
          width: '1519px',
          height: '269px',
          borderRadius: '9px', // Optional: Add border-radius for a rounded appearance
        }}
      />
      
      <br />
      <br />
      <br />
      <img
        src={Footer}
        alt="Footer"
        style={{
          width: '1519px',
          height: '269px',
          borderRadius: '9px', // Optional: Add border-radius for a rounded appearance
        }}
      />
    </div>
  );
};

export default Amazon;
