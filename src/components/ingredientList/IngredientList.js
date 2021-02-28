import React from "react"
import IngredientList from "./IngredientList.module.css"


const ingredientList = ({ingredient, number}) => {
    const styleBackground = {
        backgroundColor: "#" + Math.floor(Math.random()*16777216).toString(16)
    }
    return (
            <div class={IngredientList.card}>
                <div class={IngredientList.title} style = {styleBackground}>
                {ingredient.text}
                </div>
                <div class={IngredientList.circle} style = {styleBackground}>{number}</div>
                <div class={IngredientList.content}>
                    <h3>{ingredient.weight.toFixed(0)} Grams</h3>
                    <img class = {IngredientList.img} src = {ingredient.image} alt = {ingredient.text} />
                </div>
            </div>
           
    )
}








export default ingredientList