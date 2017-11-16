import React, { Component } from 'react'

class EditCard extends Component {
    constructor (props) {
        super(props)
        this.defaultState = {
            name: '',
            ingredients: ['']
        }
        this.state = this.defaultState
    }

    handleSubmit () {}
    
    nameChange () {}
    
    ingredientChange () {}
    
    hasNoEmptyInputs () {}
    
    canSubmit () {}
    
    redirectToRecipe (id) {}

    render () {
        return (
            <div className='EditCard'>
                <header><h1>Create A New Recipe</h1></header>
                <form className='card-content' onSubmit={this.handleSubmit}>
                    <input
                        className='input'
                        placeholder='Recipe Name'
                        type="text"
                        value={this.state.name}
                        onChange={this.nameChange}
                    />
                    { this.state.ingredients.map((ingredient, i) => {
                        return (
                            <input
                                className='input'
                                placeholder='Ingredient'
                                type="text"
                                key={i}
                                name={`${i}`}
                                value={this.state.ingredients[i]}
                                onChange={this.ingredientChange}
                            />
                        )
                    })}
                    <button
                        className={this.hasNoEmptyInputs() ? 'button' : 'disabled-button'}
                        type='button'
                        disabled={!this.hasNoEmptyInputs()}
                        onClick={this.addIngredient}
                    >
                        Add Ingredient
                    </button>
                    <input
                        className={this.canSubmit() ? 'button' : 'disabled-button'}
                        type="submit"
                        disabled={!this.canSubmit()}
                        value="Save" />
                    {this.redirectToRecipe()}
                </form>
            </div>
        )
    }
}
export default EditCard