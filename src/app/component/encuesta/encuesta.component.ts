import {Component, Inject, OnInit} from '@angular/core';
import * as myGlobal from '../../model/Global';
import {PollResponseDTO} from '../../model/poll-response-dto';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';
import {BusinessService} from '../../services/business/business.service';
import {ProcessService} from '../../bonita/process/process.service';
import {SalesforceService} from '../../bonita/salesforce/salesforce.service';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  nameContact?: string;
  idSolicitud = 0;

  respuestas = myGlobal.respuestas;
  rtas = new PollResponseDTO();

  constructor(@Inject(MAT_DIALOG_DATA) public passedData: HumanTaskDTO, private bs: BusinessService, private ps: ProcessService,
              private ss: SalesforceService) {
  }

  getProcessData(): Observable<any> {
    const r1 = this.ps.queyrVar(this.passedData.caseId, 'clienteSFObjID');
    const r2 = this.ps.queyrVar(this.passedData.caseId, 'solicitudId');
    return forkJoin([r1, r2]);
  }

  getTaskData(contactId: string, requestId: number): Observable<any> {
    const r1 = this.ss.queryContact(contactId);
    const r2 = this.bs.queryRequest(requestId);
    return forkJoin([r1, r2]);
  }

  ngOnInit(): void {
    this.getProcessData().subscribe(r => {
      this.getTaskData(r[0].value, parseInt(r[1].value, 10)).subscribe(d => {
        this.nameContact = d[0].records[0].Name;
        this.idSolicitud = d[1].requestId;
      });
    });
  }

}
