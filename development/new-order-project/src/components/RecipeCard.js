import React from 'react'
import style from './RecipeCard.module.css'

const RecipeCard = ({title, calories, image, ingredients, dishType}) => {
    return (
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol>
            {ingredients.map((ingredient, index) => (
                <li key={index} >{ingredient.text} </li>
            ))}
            </ol>
            <p>{dishType}</p>
            <p>{Math.round(calories)} calories</p>
            <img className={style.image} src={image} alt="Food" />  
        </div>
    )
}

export default RecipeCard