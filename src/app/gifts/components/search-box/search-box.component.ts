import { GiftsService } from './../../services/gifts.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifts-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type="text" placeholder="Buscar gifts..." class="form-control" #txtTagInput (keyup.enter)="searchTag()">
  `
})

export class SearchBoxComponent {
  constructor(private giftService: GiftsService) { }

  @ViewChild('txtTagInput') //Permite referenciar un elemento HTML mediante una referencia dada por #
  public tagInput!: ElementRef<HTMLInputElement>

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.giftService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }
}
