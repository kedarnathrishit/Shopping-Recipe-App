import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit, OnDestroy
 {
  recipies: Recipie[] = [];
  subscription: Subscription;

  constructor(private recipieService: RecipieService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.recipieService.recipiesChanged.subscribe(
      (recipies: Recipie[]) => {
        this.recipies = recipies;
      }
    )
    this.recipies = this.recipieService.getRecipies();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
