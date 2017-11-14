import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    list: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    recipe: {
        backgroundColor: '#757de8',
        borderRadius: '8px',
        margin: '16px 64px',
        padding: '4px 160px',
        color: 'white',
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
            <Link to='/'>
                <div style={styles.create}>
                    <h1>+</h1>
                </div>
            </Link>
            {props.recipes.length ?
                <div>
                    {props.recipes.map(recipe => {
                        return (
                            <Link key={recipe.id} to={`/${recipe.id}`}>
                                <div style={styles.recipe}>
                                    <h2>{recipe.name}</h2>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                : 'No recipes yet.'}
        </div>
    )
}

export default RecipeList