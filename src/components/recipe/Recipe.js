import React from "react"
import {Link} from "react-router-dom"
import RecipeStyle from "./Recipe.module.css"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'



const recipe = ({recipe}) => {
    
    return (
         <div className = {RecipeStyle.container}>
            <h2 className = {RecipeStyle.name}>{recipe.recipe.label.substring(0,30)}</h2>
            <img className = {RecipeStyle.recipeImage} src = {recipe.recipe.image} alt = {recipe.recipe.label} />
            <button className = {RecipeStyle.btn} >
               
                <Link className = {RecipeStyle.description} to={
                    {
                        pathname: "/ingredient", 
                        state: {
                            ingredients: recipe.recipe.ingredients,
                            title: recipe.recipe.label.substring(0,30)
                        }
                        
                    }
                    }>  Ingredient Details &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faInfo} />   
                    </Link>
            </button>
        </div>
    
    )
}


export default recipe 
