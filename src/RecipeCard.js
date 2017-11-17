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
                    <h1 className='header-name'>{this.state.recipe.name}</h1>
                </header>
                <div className='card-content'>
                    <div className='ingredient-list'>
                        <h1 className='label'>Ingredients:</h1>
                        <div className='list'>
                            {this.state.recipe.ingredients.map((ingredient, i) =>
                                <p key={i}>{ingredient}</p>
                            )}
                        </div>
                    </div>
                    <Link className='flex-center' to={`/edit/${this.id}`}><button className='button'>edit</button></Link>
                </div>
            </div>
        )
    }
}
export default RecipeCard