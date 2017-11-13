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
            <form>
                <div>Edit recipe #{this.props.match.params.recipe}</div>
            </form>
        )
    }
}
export default RecipeModal