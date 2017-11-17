import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class FormCard extends Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.ingredientChange = this.ingredientChange.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
        this.hasNoEmptyInputs = this.hasNoEmptyInputs.bind(this)
        this.shouldRedirect = this.shouldRedirect.bind(this)
        this.redirectLink = '/'
        this.cancelLink = '/'
        this.defaultState = {name: '', ingredients: [''], title: 'Card', shouldRedirect: false}
        this.state = this.defaultState
    }

    handleSubmit (event) {
        event.preventDefault()
        this.setState(this.defaultState)
    }

    nameChange (event) {
        this.setState({ name: event.target.value})
    }

    ingredientChange (index) {
        return event => {
            const newIngredients = this.state.ingredients.map((ingredient, i) => {
                return index === i ? event.target.value : ingredient
            })
            this.setState({ingredients: newIngredients})
        }
    }

    deleteIngredient (index) {
        if (this.state.ingredients.length > 1) {
            const newIngredients = this.state.ingredients.filter((ingredient, i) => {
                return index !== i
            })
            this.setState({ingredients: newIngredients})
        }
    }
    
    addIngredient () {
        const newIngredients = this.state.ingredients.map(x => x)
        newIngredients.push('')
        this.setState({ingredients: newIngredients}, () => this.lastItem.focus())
    }

    hasNoEmptyInputs () {
        return this.state.ingredients.every(ingr => ingr !== '')
    }

    canSubmit () {
        return this.state.ingredients.some(ingr => ingr !== '')
            && this.state.name !== ''
    }

    shouldRedirect () {
        return this.state.shouldRedirect
    }

    render () {
        const { name, ingredients } = this.state
        return (
            <div className='EditCard'>
                <header><h1  className='header-name'>{this.state.title}</h1></header>
                <form className='card-content' onSubmit={this.handleSubmit}>
                    <input
                        className='text-input text-input-name'
                        placeholder='Recipe Name'
                        type="text"
                        value={name}
                        onChange={this.nameChange}
                    />
                    { ingredients.map((ingredient, i) => {
                        return (
                            <div key={i} className='ingredient-form'>
                                <input
                                    className='text-input'
                                    placeholder='Ingredient'
                                    type="text"
                                    name={`${i}`}
                                    value={ingredient}
                                    onChange={this.ingredientChange(i)}
                                    ref={(input) => {
                                        if (i === ingredients.length - 1)
                                            this.lastItem = input
                                    }}
                                />
                                <button
                                    className={ingredients.length > 1 ? 'delete-button' : 'disabled-delete-button'}
                                    type='button'
                                    onClick={() => this.deleteIngredient(i)}
                                >
                                    ×
                                </button>
                            </div>
                        )
                    })}
                    <div className='flex-center'>
                        <button
                            className={this.hasNoEmptyInputs() ? 'button' : 'disabled-button'}
                            disabled={!this.hasNoEmptyInputs()}
                            onClick={this.addIngredient}
                        >
                            +
                        </button>
                        <Link to={this.cancelLink}><button
                            className='button'
                            type='button'
                        >
                            cancel
                        </button></Link>
                        <input
                            className={this.canSubmit() ? 'button' : 'disabled-button'}
                            type="submit"
                            disabled={!this.canSubmit()}
                            value="save" />
                    </div>
                    {this.shouldRedirect() && <Redirect to={this.redirectLink}/>}
                </form>
            </div>
        )
    }
}
export default FormCard