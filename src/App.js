import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'
import RecipeList from './RecipeList'
import Modal from './Modal'
import RecipeCard from './RecipeCard'
import EditCard from './EditCard'
import NewCard from './NewCard'
import store from './store'

// Material Design palette
// https://material.io/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=FFEB3B

class App extends Component {
    constructor () {
        super()
        this.state = {
            escapePressed: false,
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

    render() {
        const { escapePressed } = this.state
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <h1>Recipe Box</h1>
                    </div>
                        <RecipeList recipes={store.selectAll()} />
                        <Route path='/new' render={props => (
                            <Modal escapePressed={escapePressed} {...props} >
                                <NewCard {...props} store={store} />
                                {this.shouldRedirect && <Redirect to='/' />}
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
                                {this.shouldRedirect && <Redirect to='/' />}
                            </Modal>
                        )} />
                </div>
            </Router>
        )
    }
}

export default App
