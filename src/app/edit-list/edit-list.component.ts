import { Component, OnInit } from '@angular/core';

import { ItemStore } from '../services/ItemStore.service';
import { DateService } from '../services/Date.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  constructor(
    private ItemStore: ItemStore,
    private DateService: DateService
  ) { }

  ngOnInit(): void {}

  itemName!: string;

  createItem() {
    if(this.itemName) {
      this.ItemStore.setItems({
        name: this.itemName,
        date: this.DateService.getDateByHoursAndMinutes()
      })

      this.itemName = '';
    }
  }
}
