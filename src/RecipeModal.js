import React, { Component } from 'react'

class RecipeModal extends Component {
    constructor (props) {
        super(props)
        this.state = {
            recipe: {
                name: 'Spaghetti & Meatballs',
                ingredients: ['sauce','noodles', 'meatballs', 'parmesan']
            }
        }
    }
    
    render () {
        return (
            <div>
                <h2>Recipe #{this.props.match.params.recipe}, {this.state.recipe.name}</h2>
                <ul>
                    {this.state.recipe.ingredients.map(ingredient =>
                        <li>{ingredient}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default RecipeModal