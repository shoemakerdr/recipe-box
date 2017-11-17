
class Store {
    constructor () {
        this.recipes = JSON.parse(window.localStorage.getItem('RECIPES')) || []
    }
    
    selectAll () {
        return this.recipes
    }
    
    selectById (id) {
        const recipe = this.recipes.find(recipe => {
            return recipe.id === id
        })
        if (recipe === undefined)
            throw Error('Could not find recipe')
        // JSON stringify/parse to deep clone recipe object
        return JSON.parse(JSON.stringify(recipe))
    }
    
    indexOf (id) {
        return this.recipes.findIndex(recipe => {
            return recipe.id === id
        }) 
    }
    
    save () {
        window.localStorage.setItem('RECIPES', JSON.stringify(this.recipes))
        return this
    }
    
    insert (recipe) {
        // id is assigned a random hex value
        const id = Number(Math.random()).toString(16).slice(2)
        recipe.id = id
        this.recipes.push(recipe)
        this.save()
        return id
    }
    
    update (recipe) {
        const index = this.indexOf(recipe.id)
        if (index === -1)
            throw Error('Error: there was an issue finding the recipe')
        this.recipes.splice(index, 1, recipe)
        this.save()
        return this
    }
    
    remove (id) {
        const index = this.indexOf(id)
        if (index === -1)
            throw Error('Error: there was an issue finding the recipe')
        this.recipes.splice(index, 1)
        this.save()
        return this
    }
    
    clearStore () {
        window.localStorage.removeItem('RECIPES')
        this.recipes = []
        return this
    }
}

export default new Store()