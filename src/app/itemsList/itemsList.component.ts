import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { IStorage } from '../services/IStorage.interface';

@Component({
  selector: 'app-itemsList',
  templateUrl: './itemsList.component.html',
  styleUrls: ['./itemsList.component.css']
})

export class ItemsListComponent implements OnInit {
  currentItem!: IStorage;

  @Input() listOfItems: any[] = [];
  @Output() itemUpdated: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void { }

  deleteItem(id: number): void {
    this.listOfItems.splice(id, 1);
  }

  updateItem(id: number): void {
    this.currentItem = this
      .listOfItems
      .find((_, index) => index == id);

    /*
     * after pass item content to parent input
     * delete it
     * Set it to localStorage
    */
    this.deleteItem(id);
    this.itemUpdated.emit(this.currentItem.name);
  }
}
