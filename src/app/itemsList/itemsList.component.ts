import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { LocalStorage } from '../services/localStorage.service';

@Component({
  selector: 'app-itemsList',
  templateUrl: './itemsList.component.html',
  styleUrls: ['./itemsList.component.css']
})

export class ItemsListComponent extends LocalStorage implements OnInit {
  readonly localDataName: String = 'localData';
  currentItem!: {
    name: string;
    date: number;
  };

  @Input() listOfItems: any[] = [];
  @Output() itemUpdated: EventEmitter<string> = new EventEmitter();

  constructor() {
    super();
  }

  ngOnInit(): void { }

  deleteItem(id: number): void {
    this.listOfItems.splice(id, 1);
    this.setToLocal(this.localDataName, this.listOfItems);
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
