import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class KeepAwayGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean{
    if(!localStorage.getItem('password')){
      this.router.navigate(['/home'])
      return false
    }
    return true
  } 
}
  
