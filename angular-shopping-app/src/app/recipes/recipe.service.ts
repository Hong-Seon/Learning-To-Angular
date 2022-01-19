import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://picsum.photos/200/300', [ new Ingredient('Meat', 1), new Ingredient('Egg', 3) ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://picsum.photos/200/300', [ new Ingredient('Egg', 3), new Ingredient('onion', 3) ]),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://picsum.photos/200/300', [ new Ingredient('Potato', 1), new Ingredient('Egg', 3) ])
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipe() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
