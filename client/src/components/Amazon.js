import React, { useState } from 'react';
import list from '../list';
import '../styles/amazon.css';
import Cards from './Cards';
import Banner from '../Assets/banner.png';
import Footer from '../Assets/Footer.jpg';
import Search from './Search'; 

const Amazon = ({ handleClick }) => {
  const [filteredItems, setFilteredItems] = useState(list); 

  
  const handleSearchChange = (searchInput) => {
    const filtered = list.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <section>
        <Search onSearchChange={handleSearchChange} />
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
          borderRadius: '9px', 
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
          borderRadius: '9px', 
        }}
      />
    </div>
  );
};

export default Amazon;
