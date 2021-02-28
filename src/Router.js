
import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

import App from './App'
import Ingredient from './components/ingredient/Ingredient'


const Router = () => {
  return (
    <BrowserRouter >
        <Switch>
              <Route exact path="/ingredient" component = {Ingredient} />
              <Route path="/" component = {App} />
        </Switch>
    </BrowserRouter>
  )
}

export default Router