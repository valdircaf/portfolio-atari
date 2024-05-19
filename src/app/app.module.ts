import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CardsProjectComponent } from './components/cards-project/cards-project.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { SocialComponent } from './pages/social/social.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    CardsProjectComponent,
    AboutComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
