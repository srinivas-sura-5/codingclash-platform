import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  canActivate(): boolean {
    const isAdmin = localStorage.getItem('role') === 'admin';
    return isAdmin;
  }
}
