import { GiftsService } from './../../../gifts/services/gifts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {

  constructor(private giftsService: GiftsService) { }

  get tags(): string[] {
    return this.giftsService.tagsHistory;
  }

  searchTag(tag: string) {
    this.giftsService.searchTag(tag);
  }
}
