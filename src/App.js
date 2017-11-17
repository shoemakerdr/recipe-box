import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import RecipeList from './RecipeList'
import Modal from './Modal'
import RecipeCard from './RecipeCard'
import EditCard from './EditCard'
import NewCard from './NewCard'
import store from './store'
// import { setupStore } from './store-config'

// setupStore(store)

class App extends Component {
    constructor () {
        super()
        this.removeRecipe = this.removeRecipe.bind(this)
        this.state = {
            escapePressed: false,
            recipes: store.selectAll()
        }
    }

    componentDidMount () {
        document.addEventListener('keyup', event => {
            if (event.keyCode === 27 && window.location.pathname !== '/') {
                this.setState({escapePressed: true})
            }
        })
    }

    componentDidUpdate () {
        if (this.state.escapePressed) {
            this.setState({escapePressed: false})
        }
    }

    removeRecipe (id) {
        return event => {
            if (event.target.classList.contains('x-button')) {
                store.remove(id)
                this.setState({recipes: store.selectAll()})
            }
        }
    }

    render() {
        const { escapePressed } = this.state
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <h1>Recipe Box</h1>
                    </div>
                        <RecipeList removeRecipe={this.removeRecipe} recipes={this.state.recipes} />
                        <Route path='/new' render={props => (
                            <Modal escapePressed={escapePressed} {...props} >
                                <NewCard {...props} store={store} />
                            </Modal>
                        )} />
                        <Route path='/recipes/:recipe' render={props => (
                            <Modal escapePressed={escapePressed} {...props} >
                                <RecipeCard {...props} store={store} />
                            </Modal>
                        )} />
                        <Route path='/edit/:recipe' render={props => (
                            <Modal escapePressed={escapePressed} {...props} >
                                <EditCard {...props} store={store} />
                            </Modal>
                        )} />
                </div>
            </Router>
        )
    }
}

export default App
