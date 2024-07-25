import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import MenuCards from '../../components/MenuCard/MenuCard.jsx'
import { Testimonials } from '../../components/ShowTesti/ShowTesti.jsx'
const Home = () => {
    const[category, setCategory] = useState("All")


  return (
    <div>
        <Header/>
        <MenuCards category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
        <Testimonials/>
    </div>
  )
}

export default Home