import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class KeepAwayGuard implements CanActivate {

    constructor(private _router: Router ) {}
 
    canActivate(): boolean {

      if(!!localStorage.getItem('token')){
        this._router.navigate(['/home'])
        return false
      }

      return true
 
    }
} 
  
