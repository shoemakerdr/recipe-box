import FormCard from './FormCard'
import store from './store'

class NewCard extends FormCard {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.defaultState = {
            title: 'Create A New Recipe',
            name: '',
            ingredients: ['']
        }
        this.state = this.defaultState
    }
    
    handleSubmit (event) {
        event.preventDefault()
        const recipe = {
            name: this.state.name,
            ingredients: this.state.ingredients,
        }
        const id = store.insert(recipe)
        this.redirectLink = `/recipes/${id}`
        this.setState({shouldRedirect: true})
    }
}
export default NewCard