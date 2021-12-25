import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message-alert.component.html',
  styleUrls: ['./message-alert.component.css']
})
export class MessageAlertComponent implements OnInit {

  @Input() status: boolean | undefined;
  successMessage = 'Now you are typing..';
  dangerMessage = 'Pleas type in input !';

  constructor() { }

  ngOnInit(): void {
  }

  getContent() {
    return this.status ?
    this.dangerMessage :
    this.successMessage;
  }
}
