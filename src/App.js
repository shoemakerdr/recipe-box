import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './RecipeList'
import RecipeModal from './RecipeModal'
import EditModal from './EditModal'
import Store from './store'

class App extends Component {
    constructor () {
        super()
        this.recipeStore = new Store()
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <h2>Recipe Box</h2>
                    </div>
                    <RecipeList />
                    <Route path='/:recipe' render={props => (
                        <RecipeModal {...props} />
                    )} />
                    <Route path='/:recipe/edit' render={props => (
                        <EditModal {...props} />
                    )} />
                </div>
            </Router>
        )
    }
}

export default App
