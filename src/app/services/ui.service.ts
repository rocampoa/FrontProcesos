import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {IMessage} from '../component/message/imessage';
import {Observable} from 'rxjs';
import {MessageComponent} from '../component/message/message.component';
import {ValidarSolicitudComponent} from '../component/validar-solicitud/validar-solicitud.component';
import {HumanTaskDTO} from '../bonita/task/human-task-d-t-o';
import {ConfirmarReferenciasComponent} from '../component/confirmar-referencias/confirmar-referencias.component';
import {EncuestaComponent} from '../component/encuesta/encuesta.component';

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

  showValidateRequest(info: HumanTaskDTO): Observable<any> {
    const dialogRef = this.dialog.open(ValidarSolicitudComponent, {
      data: info,
      disableClose: true,
      hasBackdrop: true
    });
    return dialogRef.afterClosed();
  }

  showValidateRef(info: HumanTaskDTO): Observable<any> {
    const dialogRef = this.dialog.open(ConfirmarReferenciasComponent, {
      data: info,
      disableClose: true,
      hasBackdrop: true
    });
    return dialogRef.afterClosed();
  }

  showPoll(info: HumanTaskDTO): Observable<any> {
    const dialogRef = this.dialog.open(EncuestaComponent, {
      data: info,
      disableClose: true,
      hasBackdrop: true
    });
    return dialogRef.afterClosed();
  }

}
