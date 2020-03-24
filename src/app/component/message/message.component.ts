import {Component, Inject, OnInit} from '@angular/core';
import {IMessage} from './imessage';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  iconName: string = null;

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: IMessage) {
  }

  ngOnInit(): void {
    switch (this.passedData.type) {
      case 'ALERT':
        this.iconName = 'tumb_up';
        break;
      case 'SUCCESS':
        this.iconName = 'add_alert';
        break;
      case 'WARNING':
        this.iconName = 'warning';
        break;
      default:
        this.iconName = 'notification_important';
    }

  }

}
