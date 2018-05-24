import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  user;

  constructor(private afAuth: AngularFireAuth, private activeRoute: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState;
  }

  login() {
    const returnUrl = this.activeRoute.snapshot.queryParamMap.get('returnUrl') || '/';
    console.log(returnUrl + ' ');
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
