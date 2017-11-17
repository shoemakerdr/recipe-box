import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    create: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffeb3b',
        width: '64px',
        height: '64px',
        marginTop: '-32px',
        borderRadius: '100%',
    }
}

const RecipeList = props => {
    return (
        <div style={styles.list}>
            <Link to='/new'>
                <div className='button create-button'>
                    <h1>+</h1>
                </div>
            </Link>
            {props.recipes.length ?
                <div className='recipe-list'>
                    {props.recipes.map(recipe => {
                        return (
                            <div key={recipe.id} className='list-item'>
                                <Link to={`/recipes/${recipe.id}`}>
                                    <h2 className='recipe-name'>{recipe.name}</h2>
                                </Link>
                                <div
                                    onClick={props.removeRecipe(recipe.id)}
                                    className='x-button lower-z'
                                >
                                    ×
                                </div>
                            </div>
                        )
                    })}
                </div>
                : <h2 className='list-item'>No recipes yet.</h2>}
        </div>
    )
}

export default RecipeList