import React from "react"
// import { Input, Button} from '@material-ui/core'
import SearchForm from "./SearchForm.module.css"


const searchForm = ({checkRecipe, foodName, food}) => {
   
    return (
        <div className = {SearchForm.formContainer}>
             <h1>Search the best </h1>
             <form onSubmit = {checkRecipe}>
                <input type = "text" placeholder ="Search the best" onChange = {foodName} value = {food} />
                <input  type = "submit" value = "go check" />
            </form>
        </div>
         
    )
}


export default searchForm