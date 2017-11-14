
const defaultRecipes = [
    {
        name: 'Spaghetti & Meatballs',
        ingredients: ['sauce','noodles', 'meatballs', 'parmesan']
    },
    {
        name: 'Chicken & Rice',
        ingredients: ['chicken breast','salt','pepper','rice','yellow rice seasoning']
    },
    {
        name: 'Mahkani Chicken',
        ingredients: ['chicken breast', 'tomatoes','butter','garam masala','cream','yogurt','cumin']
    },
    {
        name: 'Noodles & Tomatoes',
        ingredients: ['noodles','crushed tomatoes','salt']
    },
]

export function setupStore (store) {
    store.clearStore()
    defaultRecipes.forEach(recipe => store.insert(recipe))
}