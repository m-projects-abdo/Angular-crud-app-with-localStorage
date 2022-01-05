import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-item-info-result',
  templateUrl: './item-info-result.component.html',
  styleUrls: ['./item-info-result.component.css']
})
export class ItemInfoResultComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  item!: {
    name: string,
    date: string
  };

  ngOnInit(): void {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.item = data['itemResolve'];
        }
      )
  }
}
