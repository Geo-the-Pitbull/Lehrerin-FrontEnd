import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({providedIn: 'root'})
export class KeepAwayGuard implements CanActivate {

    constructor(private _router: Router ) {}
 
    canActivate() {

      if(!localStorage.getItem('token')){
        return this._router.parseUrl('/home')
        // return false
      }

      return true
 
    }
} 
  
