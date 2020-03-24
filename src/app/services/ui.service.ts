import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {IMessage} from '../component/message/imessage';
import {Observable} from 'rxjs';
import {MessageComponent} from '../component/message/message.component';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor(private dialog: MatDialog) {
  }

  showMessage(info: IMessage): Observable<any> {
    const dialogRef = this.dialog.open(MessageComponent, {
      data: info,
      disableClose: true,
      role: 'alertdialog',
      hasBackdrop: true
    });

    return dialogRef.afterClosed();
  }

}
