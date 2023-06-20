import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { GifCardComponent } from './components/gif-card/gif-card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';



@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, GifCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomePageComponent]
})
export class GiftsModule { }
