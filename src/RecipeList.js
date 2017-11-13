import React, { Component } from 'react'
import Recipe from './Recipe'

class RecipeList extends Component {
    render () {
        return (
            <Recipe key='1' recipeName={'Chicken and rice'} />   
        )
    }
}

export default RecipeList