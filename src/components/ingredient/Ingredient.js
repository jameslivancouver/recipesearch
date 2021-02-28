import React from "react"
import {v4 as uuidv4} from "uuid"
import {Link} from "react-router-dom"
import IngredientList from "../ingredientList/IngredientList"
import IngredientStyle from "./Ingredient.module.css"

const ingredient = ({location: {state: {title, ingredients}}}) => {
   
    return (

    <>
        <h1>The ingredients of {title}</h1>
        <div className = {IngredientStyle.container}>
                {
                    ingredients.map((ingredient, i) => {
                    return <IngredientList ingredient = {ingredient} key = {uuidv4()} number = {i+1}/>
                })
                }
        </div>
         <div className = {IngredientStyle.btn}>
                <Link to = "/">Home</Link>
        </div>
    </>
    )
}

export default ingredient


