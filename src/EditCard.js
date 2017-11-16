import React, { Component } from 'react'

class EditCard extends Component {
    constructor (props) {
        super(props)
        this.id = props.match.params.recipe
        this.state = {
            recipe: props.store.selectById(this.id)
        }
    }

    handleSubmit () {}

    nameChange () {}

    ingredientChange () {}

    deleteIngredient (index) {}

    hasNoEmptyInputs () {}

    canSubmit () {}

    redirectToRecipe (id) {}

    render () {
        const { name, id, ingredients } = this.state.recipe
        return (
            <form className='EditCard' onSubmit={this.handleSubmit}>
                <h1>Edit Your Recipe</h1>
                <input
                    className='input'
                    placeholder='Recipe Name'
                    type="text"
                    value={name}
                    onChange={this.nameChange}
                />
                { ingredients.map((ingredient, i) => {
                    return (
                        <div key={i}>
                            <input
                                className='input'
                                placeholder='Ingredient'
                                type="text"
                                name={`${i}`}
                                value={ingredient}
                                onChange={this.ingredientChange}
                            />
                            <button
                                className='button'
                                type='button'
                                onClick={() => this.deleteIngredient(i)}
                            >
                                X
                            </button>
                        </div>
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
                    value="Submit" />
                {this.redirectToRecipe(id)}
            </form>
        )
    }
}
export default EditCard