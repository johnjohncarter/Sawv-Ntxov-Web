import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderBarComponent } from './components/main-layout/header-bar/header-bar.component';
import { FooterBarComponent } from './components/main-layout/footer-bar/footer-bar.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MainLayoutComponent,
    HeaderBarComponent,
    FooterBarComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
