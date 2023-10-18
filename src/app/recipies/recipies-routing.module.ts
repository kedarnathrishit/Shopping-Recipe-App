import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipiesComponent } from "./recipies.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipiesStartComponent } from "./recipies-start/recipies-start.component";
import { RecipieEditComponent } from "./recipie-edit/recipie-edit.component";
import { RecipieDetailComponent } from "./recipie-detail/recipie-detail.component";
import { RecipiesResolverService } from "./recipies-resolver.service";

const routes: Routes = [
    {
        path: '', component: RecipiesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: RecipiesStartComponent },
            { path: 'new', component: RecipieEditComponent },
            { path: ':id', component: RecipieDetailComponent, resolve: [RecipiesResolverService] },
            { path: ':id/edit', component: RecipieEditComponent, resolve: [RecipiesResolverService] }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipiesRoutingModule{

}