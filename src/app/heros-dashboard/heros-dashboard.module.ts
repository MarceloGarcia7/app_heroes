import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../utilities/search-filter.pipe';

import { HerosDashboardComponent } from './heros-dashboard.component';
import { HeroDetailComponent } from '../component/hero-detail/hero-detail.component';
import { HeroFormComponent } from '../component/hero-form/hero-form.component';
import { SearchHeroComponent } from '../component/search-hero/search-hero.component';

import { HttpClientModule } from '@angular/common/http';
import { HeroService } from '../utilities/hero.service';

@NgModule({
  declarations: [
    HerosDashboardComponent,
    HeroDetailComponent,
    HeroFormComponent,
    SearchHeroComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HerosDashboardComponent
  ],
  providers: [HeroService],
})
export class HerosDashboardModule { }
