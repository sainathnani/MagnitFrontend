import { Injectable } from '@angular/core';
import {QuestionOptions} from "../domain/QuestionOptions";

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  items: QuestionOptions[] = [];

  constructor() { }

  addToItems(product: QuestionOptions) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItem( id: number) {
    return this.items[id];
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
