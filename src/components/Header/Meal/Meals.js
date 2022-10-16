import React, { useEffect, useState } from 'react';
// import logo from '../../images/Logo.svg'
import './Meals.css'
const Activity = () => {

    const [meals, setMeals] = useState([])

    useEffect(()=>{
        fetch(`meals.json`)
        .then(res=>res.json())
        .then(data=>setMeals(data))
    },[])
    return (
        <div className='activity-container'>
            <div className="meals-container">

<h1>My Cooking Activity</h1>
<h2>Select today's meal</h2>

{/* {
    meals.map(meal=> <Meal
        key ={meal.id}
    meal={meal}
    ></Meal>)
} */}

            </div>

            <div className="my-container">

<div className='activity-info'>
<div className="my-info">
    <div className='name'>

    <img src="" alt="" />
    <div>
    <h3>Juliana Tonu</h3>
    <h4>DHaka, Bangladesh</h4>
    </div>

    </div>

<div className=''>
      <div>
      <h1>54kg</h1>
      <h2>Weight</h2>
      </div>

      <div>
      <h1>5.1</h1>
      <h2>Height</h2>
      </div>

      <div>
      <h1>25yrs</h1>
      <h2>Age</h2>
      </div>
</div>

<div className=''>
    <h2>Add a Break</h2>
</div>

</div>
</div>
            </div>
            
        </div>
    );
};

export default Activity;