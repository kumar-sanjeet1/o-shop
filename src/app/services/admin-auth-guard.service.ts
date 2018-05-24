import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import * as firebase from 'firebase';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService,
  private userService: UserService) {}

  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(switchMap((user: firebase.User) =>
      this.userService.get(user.uid)),
      map((appUser) => appUser.isAdmin));
   }

}

