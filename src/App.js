import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import jsonfoods from "./foods.json";
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(jsonfoods)
  

  const addNewFood = (food) => {
    const updatedFood = [...foods, food];
 
    setFoods(updatedFood);
  };

  const deleteFood = name => {
    const newFood = foods.filter(food => {
      return food.name !== name
    })
    setFoods(newFood)
  }
  
  const searchFood = (event) => {

    if(event.target.value === ''){
      setFoods([...jsonfoods])
      return foods
    }
    

    const filteredFood = foods.filter(food => food.name.toUpperCase().startsWith(event.target.value.toUpperCase()) )
    setFoods(filteredFood)
    return filteredFood
  }


  return (
    <div className="App">

    <Search searchFood={searchFood} />

    <AddFoodForm addFood={addNewFood} />

    {foods.map(food => {
        return <FoodBox food={food} deleteFood={deleteFood} />
    })}
        
    </div>
  );
}

export default App;
