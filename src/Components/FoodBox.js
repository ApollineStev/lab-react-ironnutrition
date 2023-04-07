import React from "react";
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food, deleteFood}) {
    
    
    const Cal = food.calories
    const serving = food.servings
    const totalCal = Cal * serving
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {totalCal} </b> kcal
        </p>
        <Button type="primary" onClick={() => deleteFood(food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;