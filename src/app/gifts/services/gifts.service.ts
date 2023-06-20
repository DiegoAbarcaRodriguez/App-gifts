import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SearchResponse, Gif } from './../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GiftsService {

  public gifList: Gif[] = [];

  private _tagHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/search';
  private apiKey: string = 'V1ZA5yOc98tqE5Bj4Xy1gXTQBbYyJZ99';
  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }

  get tagsHistory() {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter(olTag => olTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();

  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagHistory = JSON.parse(localStorage.getItem('history')!);

    if (this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);
  }

  searchTag(tag: string) {

    if (tag.length === 0) return;

    this.organizeHistory(tag);



    this.http.get<SearchResponse>(`${this.serviceUrl}?api_key=${this.apiKey}&limit=10&q=${tag}`)
      .subscribe(resp => {
        this.gifList = resp.data;
        console.log(this.gifList)
      })
  }



}
