import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifts-gif-card',
  templateUrl: 'gif-card.component.html'
})

export class GifCardComponent implements OnInit {
  constructor() { }

  @Input()
  gif?: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }



}
