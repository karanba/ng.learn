import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './../shared/recipe.model';
import { Ingredient } from '../shared/ingredient.module';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is a recipe',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
      [
        new Ingredient('Mushroms', 5),
        new Ingredient('Egg', 3)
      ]
    ),
    new Recipe('Krep',
      'This is a krep recipe',
      'https://cdn.pixabay.com/photo/2017/09/30/12/12/pancakes-2801959_1280.jpg',
      [
        new Ingredient('Mushroms', 5)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
