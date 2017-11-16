import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                <header>
                    <h1>{this.state.recipe.name}</h1>
                </header>
                <ul className='card-content'>
                    {this.state.recipe.ingredients.map((ingredient, i) =>
                        <li key={i}>{ingredient}</li>
                    )}
                </ul>
                <Link className='flex-center' to={`/edit/${this.id}`}><div className='button'><h2>Edit</h2></div></Link>
            </div>
        )
    }
}
export default RecipeCard