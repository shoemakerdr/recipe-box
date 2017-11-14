import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './RecipeList'
import Modal from './Modal'
import RecipeCard from './RecipeCard'
import EditCard from './EditCard'
import store from './store'

// Material Design palette
// https://material.io/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=FFEB3B

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <h1>Recipe Box</h1>
                    </div>
                        <RecipeList recipes={store.selectAll()} />
                        <Route path='/:recipe' render={props => (
                            <Modal {...props} >
                                <RecipeCard {...props} store={store} />
                            </Modal>
                        )} />
                        <Route path='/:recipe/edit' render={props => (
                            <Modal {...props} >
                                <EditCard {...props} store={store} />
                            </Modal>
                        )} />
                </div>
            </Router>
        )
    }
}

export default App
