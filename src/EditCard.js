import React, { Component } from 'react'

class EditCard extends Component {
    constructor (props) {
        super(props)
        this.id = props.match.params.recipe
        this.state = {
            recipe: props.store.selectById(this.id)
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
export default EditCard