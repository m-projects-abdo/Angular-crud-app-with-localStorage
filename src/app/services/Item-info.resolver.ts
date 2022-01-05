import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { IStorage } from './IStorage.interface';
import { Injectable } from '@angular/core';
import { ItemStore } from './ItemStore.service';

@Injectable({providedIn: 'root'})
export class ItemInfoResolver implements Resolve<object> {
  constructor(private service: ItemStore) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    //return item info before the route is loading...
    return this.service.getInfo(+route.params['id']);
  }
}
