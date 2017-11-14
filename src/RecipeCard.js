import React, { Component } from 'react'

class RecipeCard extends Component {
    constructor (props) {
        super(props)
        this.id = props.match.params.recipe
        this.state = {
            recipe: props.store.selectById(this.id)
        }
    }
    
    render () {
        return (
            <div className='RecipeCard'>
                <h2>Recipe ID #{this.state.recipe.id}, {this.state.recipe.name}</h2>
                <ul>
                    {this.state.recipe.ingredients.map((ingredient, i) =>
                        <li key={i}>{ingredient}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default RecipeCard