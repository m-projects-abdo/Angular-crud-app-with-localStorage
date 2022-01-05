import { Injectable } from '@angular/core';

import { IStorage } from './IStorage.interface';
import { LocalStorage } from './localStorage.service';


@Injectable({providedIn: 'root'})
export class ItemStore extends LocalStorage{
  constructor() {
    super();
  }

  //base name of storing items data
  readonly localDataName: string = 'localData';

  //get data from localStorage
  private ListItems: IStorage[] = this.getFromLocal(this.localDataName);

  public getItems(): IStorage[] {
    return this.getFromLocal(this.localDataName)
  }

  public setItems(Items: IStorage): void {
    this.ListItems.push(Items);

    // Set to localStorage after saving data
    this.setToLocal(this.localDataName, this.ListItems);
  }

  public clearAll() {
    this.clearLocalData(this.localDataName);
  }

  public getInfo(id: number): object {
    return this.getInfoFromLocal(this.localDataName, id)
  }
}
