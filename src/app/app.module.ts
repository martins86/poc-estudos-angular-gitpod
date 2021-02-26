import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TopBarModule } from './core/components/top-bar/top-bar.module';
import { LeftBarModule } from './core/components/left-bar/left-bar.module';
import { BottomBarModule } from './core/components/bottom-bar/bottom-bar.module';

const coreModules = [TopBarModule, LeftBarModule, BottomBarModule];

import { LoadingSpinnerModule } from './shared/components/loading-spinner/loading-spinner.module';

const sharedModules = [LoadingSpinnerModule];

import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { ProfileModule } from './pages/profile/profile.module';

const pagesModules = [HomeModule, LoginModule, ProfileModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    ...coreModules,
    AppRoutingModule,
    ...sharedModules,
    ...pagesModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
