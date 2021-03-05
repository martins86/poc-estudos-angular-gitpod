import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignIn]',
})
export class GoogleSignInDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onClick(): void {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(provider);
  }
}
