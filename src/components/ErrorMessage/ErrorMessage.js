import React from "react"
import ErrorInfo from "./ErrorMessage.module.css"

const errorMessage = ({error}) => {
    return (
        <div class = {ErrorInfo.alert} >
                {error}
        </div>
       
      
    )
}

export default errorMessage