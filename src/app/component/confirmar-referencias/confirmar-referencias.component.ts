import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';
import {BusinessService} from '../../services/business/business.service';
import {ProcessService} from '../../bonita/process/process.service';
import {SalesforceService} from '../../bonita/salesforce/salesforce.service';
import {forkJoin, Observable} from 'rxjs';
import {ValidarReferenciasDTO} from '../../model/validar-referencias-dto';

@Component({
  selector: 'app-confirmar-referencias',
  templateUrl: './confirmar-referencias.component.html',
  styleUrls: ['./confirmar-referencias.component.css']
})
export class ConfirmarReferenciasComponent implements OnInit {

  data = new ValidarReferenciasDTO();

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: HumanTaskDTO, private bs: BusinessService, private ps: ProcessService,
              private ss: SalesforceService) {
  }

  getProcessData(): Observable<any> {
    const r1 = this.ps.queyrVar(this.passedData.caseId, 'clienteSFObjID');
    const r2 = this.ps.queyrVar(this.passedData.caseId, 'solicitudId');
    const r3 = this.ps.queyrVar(this.passedData.caseId, 'refComSFObjID');
    const r4 = this.ps.queyrVar(this.passedData.caseId, 'refFamSFObjIF');
    return forkJoin([r1, r2, r3, r4]);
  }

  getTaskData(contactId: string, requestId: number, refCId: string, refPId: string): Observable<any> {
    const r1 = this.ss.queryContact(contactId);
    const r2 = this.bs.queryRequest(requestId);
    const r3 = this.ss.queryContact(refPId);
    const r4 = this.ss.queryContact(refCId);
    return forkJoin([r1, r2, r3, r4]);
  }

  ngOnInit(): void {
    this.data.taskId = this.passedData.id;
    this.getProcessData().subscribe(r => {
      this.getTaskData(r[0].value, parseInt(r[1].value, 10), r[2].value, r[3].value).subscribe(d => {
        this.data.nombre = d[0].records[0].Name;
        this.data.idSolicitud = d[1].requestId;
        this.data.nombreRc = d[3].records[0].Name;
        this.data.telRc = d[3].records[0].MobilePhone;
        this.data.emailRc = d[3].records[0].Email;
        this.data.nombreRf = d[2].records[0].Name;
        this.data.emailRf = d[2].records[0].Email;
        this.data.telRf = d[2].records[0].MobilePhone;
      });
    });
  }

}
