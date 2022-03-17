import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HerosDashboardModule } from './heros-dashboard/heros-dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HerosDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
