import { IStorage } from './IStorage.interface';

export class LocalStorage {
  private localDataItems!: Array<Object>;

  constructor() {}

  setToLocal(
    localDataName: String,
    localDataVlue: (IStorage | Array<Object>)
  ): void {
    localStorage.setItem(`${localDataName}`, JSON.stringify(localDataVlue));
  }

  getFromLocal(localDataName: String): Array<Object> {
    return this.checkLocalData(localDataName) ?
      JSON.parse(localStorage.getItem(`${localDataName}`)!) : [];
  }

  clearLocal(): void {
    localStorage.clear();
  }

  deleteItemFromLocal(localDataName: String, itemIndex: Number) {}

  updateDataFromLocal(localDataName: String): void {}

  checkLocalData(localDataName: String): boolean {
    return localStorage.getItem(`${localDataName}`)
      ? true
      : false;
  }
}
