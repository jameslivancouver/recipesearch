import React, {useEffect, useState} from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import Recipe from "./components/recipe/Recipe"
import SearchForm from "./components/searchForm/SearchForm"
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import App from "./App.module.css"


const API_ID = "cfacc71f"
const API_KEY = "399d37de39c3fb7d97808a1903416170"

const app = () => {

    // const [recipes, setRecipes] = React.useState(JSON.parse(window.localStorage.getItem("recipes")) || [])
   
    const [error , setError] = useState("")
    const [recipes, setRecipes] = useState([])
    const [food, setFood] = useState("")
    
    
    useEffect(() => {
    const item = localStorage.getItem('recipes')
    if (item) {
      setRecipes(JSON.parse(item))
    }
//     return () => {
//     // Clean up the local storage
//     localStorage.removeItem('recipes')
//   };
    }, [])

    const foodName = (e) => {
        const newValue = e.target.value
        setFood(newValue)
    }

    
    const checkRecipe = async (e) => {
        e.preventDefault()
        if(food !== "") {
            const result = await axios.get(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`)
            if(!result.data.more){
                setError("Please fill in the valid food name")
                return
            }
            setError("")
            setFood("")
            setRecipes(result.data.hits)
            localStorage.setItem("recipes", JSON.stringify(result.data.hits))
       
        } else {
            setError("Please enter a food name")
        }
      
    }


    return (
        <div className = {App.home}>
            {error !== "" && <ErrorMessage error = {error}/>}
            <SearchForm food = {food}  foodName = {foodName} checkRecipe = {checkRecipe} /> 
                <div className = {App.wrapper}>
                    {recipes.map((recipe) => {
                        return(
                            <Recipe recipe = {recipe} key = {uuidv4()} />
                        )
                    
                    })}
                </div>
        </div>
    )
}


export default app