import {Recipe} from '../shared/recipe';
import {Ingredient} from '../shared/ingredient'

export let RECIPES: Recipe[] = [
    new Recipe(
        'Fish & Chips',
        'A taste of the ocean.',
        'http://cdn-image.myrecipes.com/sites/default/files/styles/300x300/public/image/recipes/cl/11/02/crispy-fish-and-chips-cl-x.jpg',
        [
            new Ingredient('Fish', 2),
            new Ingredient('Fries', 1)
        ]
        ),
    new Recipe(
        'Burger & Fries',
        'Classic Lunch',
        'http://www.chewonthatblog.com/wp-content/uploads/2012/10/fast-food-burger-and-fries-300x300.jpg',
        [
            new Ingredient('Hamburger', 1),
            new Ingredient('Bun', 1),
            new Ingredient('Fries', 1)
        ]
    )
]