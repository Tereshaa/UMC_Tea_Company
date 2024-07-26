import React, { useState } from 'react';
import { Card } from '../Card/Card'; 
import './MenuCard.css'; 
import { menu_list } from '../../assets/assets'; 

const MenuCards = ({ category, setCategory }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (menuName) => {
    console.log(`Menu card clicked: ${menuName}`); 
    setActiveCard(prev => prev === menuName ? null : menuName); 
    setCategory(prev => prev === menuName ? 'All' : menuName);
  };

  return (
    <div id="explore-menu" className="menu-cards-container">
      <div className="menu-cards-heading">
        <h1 className="main-head">Explore Our Menu</h1>
        <h2 className="subtitle">Find your favorite items from our diverse selection</h2>
      </div>

      <div className="menu-cards">
        {menu_list.map((item, index) => (
          <Card
            key={index}
            title={item.menu_name}
            description={item.menu_description} 
            backgroundImage={item.menu_image}
            hoverImage={item.hoverImage} 
            onClick={() => handleClick(item.menu_name)} 
            isActive={activeCard === item.menu_name} 
          />
        ))}
      </div>
    </div>
  );
};

export default MenuCards;
