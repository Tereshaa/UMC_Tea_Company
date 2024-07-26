import React from 'react';
import './Header.css';

const Header = () => {
  const handleClick = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
        <div className="header-contents">
            <h2>Experience the Perfect Brew with UMC Tea.</h2>
            <p>
                Discover the finest selection of premium tea leaves, rich coffee blends, 
                and delightful beverages like badam powder. Our dedication to quality and 
                tradition ensures every sip is a journey of flavor and aroma. Experience 
                the perfect brew with us today!
            </p>
            <button id="view-menu-button" onClick={handleClick}>View Menu</button>
        </div>
    </div>
  );
};

export default Header;
