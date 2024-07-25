import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <div className="food-display-heading">
        <h1 className="main-title">Discover Our Entire Range</h1>
        <h2 className="subtitle">Browse through our extensive selection of top-quality beverages.</h2>
      </div>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Return null if the item does not match the category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
