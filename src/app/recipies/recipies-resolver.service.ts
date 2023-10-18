import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipie } from "./recipie.model";
import { Observable } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipieService } from "./recipie.service";

@Injectable({providedIn: "root"})
export class RecipiesResolverService implements Resolve<Recipie []> {

    constructor(private datStorageService: DataStorageService,
        private recipiesService: RecipieService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipie[] | Observable<Recipie[]> | Promise<Recipie[]> {
        const recipes = this.recipiesService.getRecipies();
        if(recipes.length === 0){
            return this.datStorageService.fetchRecipies();
        }
        return recipes;
    }

}