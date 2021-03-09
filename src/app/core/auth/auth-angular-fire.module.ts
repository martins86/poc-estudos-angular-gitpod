import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from './../../../environments/environment';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { GoogleSignInDirective } from './directive/google-sign-in.directive';

@NgModule({
  // declarations: [GoogleSignInDirective],
  imports: [
    CommonModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
  ],
  // exports: [GoogleSignInDirective],
})
export class AuthAngularFireModule {}
