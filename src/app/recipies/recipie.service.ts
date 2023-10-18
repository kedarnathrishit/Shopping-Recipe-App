import { Injectable } from "@angular/core";
import { Recipie } from "./recipie.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipieService{
    recipiesChanged = new Subject<Recipie[]>();

    constructor(private slService: ShoppingListService){}

    private recipies: Recipie[] = [
        new Recipie('Borgir','Fat American always approves!','https://i.pinimg.com/originals/23/ed/80/23ed80fa26efafc1b694094243b0e0bd.jpg',[new Ingredient('Bun',2), new Ingredient('Cutlet',1),new Ingredient('Sauce',1)]),
        new Recipie('Ratatouille','Mama mia!','https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg',[new Ingredient('Tomato',5), new Ingredient('Zucchini',2)])
      ];

    getRecipies() {
        return this.recipies.slice(); // will return a new array that is an exact copy of recipies array. we are doing this because if we directly return the reference itself , it can be modified.
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipie(index: number){
        return this.recipies[index];
    }

    addRecipie(recipie: Recipie){
        this.recipies.push(recipie);
        this.recipiesChanged.next(this.recipies.slice());
    }

    updateRecipie(index: number,newRecipie: Recipie){
        this.recipies[index] = newRecipie;
        this.recipiesChanged.next(this.recipies.slice());
    }

    deleteRecipe(index: number){
        this.recipies.splice(index,1);
        this.recipiesChanged.next(this.recipies.slice());
    }

    setRecipies(recipes: Recipie[]){
        this.recipies = recipes;
        this.recipiesChanged.next(this.recipies.slice());
    }
}