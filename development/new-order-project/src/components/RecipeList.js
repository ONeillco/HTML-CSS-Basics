import React, {useEffect, useState} from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = () => {

  const APP_ID = '2ea692f6'
  const APP_KEY = '65efb40bc6b0e31c0d9075f1e3b420f9'

  const [recipes, setRecipes] = useState([])
  const [submit, setSubmit] = useState('')
  const [main, setMain] = useState('banana')

 

  useEffect(() => {
    fetch(`https://api.edamam.com/search?q=${main}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res => res.json())
      .then(data => setRecipes(data.hits))
}, [main])

  const updateSubmit = e => {
    setSubmit(e.target.value)
    
  }

  const getSubmit = e => {
    e.preventDefault()
    setMain(submit)
    setSubmit('')
  }

  return (
    <div> 
    
    
      <form className="submit-form" onSubmit={getSubmit} >
        <input className="submit-bar" type="text" value={submit} onChange={updateSubmit} />
        <button className="submit-button" type="submit">Search</button>
      </form>
      
  
    <div className='recipes' >
      {recipes.map((recipe, index) => (
        <RecipeCard 
        key={index}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        dishType={recipe.recipe.dishType}
        ingredients={recipe.recipe.ingredients} 
        />  
         ))}

       </div>
       
       
       
    </div>   
       



       
       
  );
}


export default RecipeList
