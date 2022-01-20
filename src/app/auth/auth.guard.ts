import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }

    id: any;
    superuser: any;
    canActivate(): any {
        if (localStorage.getItem("userId") === null && localStorage.getItem("adminId") === null && localStorage.getItem("pharmacyId") === null) {
            this.router.navigate(['']);
        } else {
            return true;
        }
    }





}