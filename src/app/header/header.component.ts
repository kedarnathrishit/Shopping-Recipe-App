import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { useAnimation } from "@angular/animations";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{

    isAuthenticated = false;
    private userSub: Subscription;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService){}

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }

    onLogout(){
        this.authService.logout();
    }

    onSaveData(){
        this.dataStorageService.storeRecipies();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipies().subscribe();
    }
}