import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TopBarModule } from './core/components/top-bar/top-bar.module';
import { BottomBarModule } from './core/components/bottom-bar/bottom-bar.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TopBarModule,
    BottomBarModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
