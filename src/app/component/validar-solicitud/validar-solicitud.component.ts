import {Component, Inject, OnInit} from '@angular/core';
import {ValidarSolicitudDTO} from '../../model/validar-solicitud-dto';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';
import {BusinessService} from '../../services/business/business.service';
import {ProcessService} from '../../bonita/process/process.service';
import {forkJoin, Observable} from 'rxjs';
import {SalesforceService} from '../../bonita/salesforce/salesforce.service';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.css']
})
export class ValidarSolicitudComponent implements OnInit {

  data = new ValidarSolicitudDTO();

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: HumanTaskDTO, private bs: BusinessService, private ps: ProcessService,
              private ss: SalesforceService) {
  }

  getProcessData(): Observable<any> {
    const r1 = this.ps.queyrVar(this.passedData.caseId, 'contactId');
    const r2 = this.ps.queyrVar(this.passedData.caseId, 'solicitudId');
    return forkJoin([r1, r2]);
  }

  getTaskData(contactId: string, requestId: number): Observable<any> {
    const r1 = this.ss.queryContact(contactId);
    const r2 = this.bs.queryRequest(requestId);
    return forkJoin([r1, r2]);
  }

  ngOnInit(): void {
    this.data.taskId = this.passedData.id;
    this.getProcessData().subscribe(r => {
      this.getTaskData(r[0].value, parseInt(r[1].value, 10)).subscribe(d => {
        this.data.nombre = d[0].records[0].Name;
        this.data.idSolicitud = d[1].requestId;
        this.data.gastos = '' + (parseInt(d[1].erent, 10) + parseInt(d[1].cards, 10) + parseInt(d[1].loans, 10) + parseInt(d[1].expenses, 10));
        this.data.ingresos = '' + (parseInt(d[1].commissions, 10) + parseInt(d[1].income, 10) + parseInt(d[1].rent, 10) + parseInt(d[1].salary, 10));
        this.data.monto = d[1].amount;
      });
    });
  }

}
