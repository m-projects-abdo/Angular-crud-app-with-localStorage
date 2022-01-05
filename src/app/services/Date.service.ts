import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DateService {
  constructor() {}

  private currentDate : Date = new Date();

  public getDateByHoursAndMinutes(): string {
    return `${
      (
        (this.currentDate.getHours() > 12) ?
        (this.currentDate.getHours() - 12) :
        (this.currentDate.getHours())
      )
    }:${this.currentDate.getMinutes()}`
  }
}
