import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients : Ingredient[];

  constructor(private slService: ShoppingListService){}
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  private igChangeSub: Subscription;

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

}
