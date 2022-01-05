import { IStorage } from './IStorage.interface';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LocalStorage {
  constructor() {}

  protected setToLocal(localDataName: string, localDataVlue: IStorage[]): void {
    localStorage.setItem(localDataName, JSON.stringify(localDataVlue));
  }

  protected getFromLocal(localDataName: string): IStorage[] {
    if(this.checkLocalData(localDataName)) return [];
    return JSON.parse(localStorage.getItem(localDataName)!)
  }

  protected getInfoFromLocal(localDataName: string, id: number): object {
    let localStorageData = this.getFromLocal(localDataName);
    let item = localStorageData.find((item,index) => index == id)

    return item || {};
  }

  protected clearLocalAll(): void {
    localStorage.clear();
  }

  protected clearLocalData(localDataName: string): void {
    localStorage.removeItem(localDataName);
  }

  protected deleteItemFromLocal(localDataName: String, itemIndex: Number): void {}

  protected updateDataFromLocal(localDataName: String): void {}

  protected checkLocalData(localDataName: string): boolean {
    return localStorage.getItem(localDataName)
      ? false
      : true;
  }
}
