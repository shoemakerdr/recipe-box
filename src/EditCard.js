import FormCard from './FormCard'
import store from './store'

class EditCard extends FormCard {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.id = props.match.params.recipe
        this.redirectLink = `/recipes/${this.id}`
        this.cancelLink = `/recipes/${this.id}`
        this.recipe = props.store.selectById(this.id)
        this.defaultState = {
            shouldRedirect: false,
            title: this.recipe.name,
            name: this.recipe.name,
            ingredients: this.recipe.ingredients
        }
        this.state = this.defaultState
    }
    
    handleSubmit (event) {
        event.preventDefault()
        const recipe = {
            name: this.state.name,
            ingredients: this.state.ingredients,
            id: this.id
        }
        store.update(recipe)
        this.setState({shouldRedirect: true})
    }
    
    nameChange (event) {
        this.setState({
            title: event.target.value,
            name: event.target.value
            
        })
    }
}
export default EditCard