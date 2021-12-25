import { Component, OnInit } from '@angular/core';

import { LocalStorage } from './services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent extends LocalStorage implements OnInit {
  readonly localDataName: String = 'localData';
  inputModel!: String;
  items: Array<Object> = [];

  ngOnInit() {
    this.items = this.getFromLocal(this.localDataName);
  }

  hasError() {
    return this.inputModel ? false : true;
  }

  listIsEmpty() {
    return this.items[0] ? false : true;
  }

  addTOList() {
    if(!this.hasError()) {
      this.items.push({
        name: this.inputModel,
        date: this.getDate()
      });

      // set array of data list in localStorage
      this.setToLocal(this.localDataName, this.items);

      // reset a input value after adding value
      this.inputModel = '';
    }
  }

  clearInput() {
    this.inputModel = '';
  }

  clearList() {
    if(!this.listIsEmpty()) {
      this.items = [];
      this.clearLocal();
    }
  }

  setItemToUpdate(item: String) {
    this.inputModel = item;
  }

  getDate() {
    let currentDate = new Date();
    return `${
      (
        (currentDate.getHours() > 12) ?
        (currentDate.getHours() - 12) :
        (currentDate.getHours())
      )
    }:${currentDate.getMinutes()}`
  }
}
