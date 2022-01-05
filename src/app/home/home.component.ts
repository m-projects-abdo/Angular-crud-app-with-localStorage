import { Component, OnInit } from '@angular/core';

import { IStorage } from '../services/IStorage.interface';
import { ItemStore } from '../services/ItemStore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  items!: IStorage[];

  constructor(private ItemStore: ItemStore) {}

  ngOnInit(): void {
    this.items = this
      .ItemStore
      .getItems()
  }

  setItemToUpdate(item: string): void {
    console.log(item);
    //do something...
  }

  clearList() {
    this.items = [];
    this.ItemStore.clearAll(); //remove all data from localStorage
  }
}
