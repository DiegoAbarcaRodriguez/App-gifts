import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, OnInit } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifts-home-page',
  templateUrl: 'home-page.component.html'
})

export class HomePageComponent {
  constructor(private giftsService: GiftsService) { }

  get gifs(): Gif[]{
    return this.giftsService.gifList;
  }
}
