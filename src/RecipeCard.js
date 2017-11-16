import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffeb3b',
        width: '64px',
        height: '64px',
    }
}

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
                <Link to={`/edit/${this.id}`}><div style={styles.button}><h2>Edit</h2></div></Link>
            </div>
        )
    }
}
export default RecipeCard