import {Component, OnInit} from '@angular/core';
import {ApplicationForm} from '../../model/application-form';
import * as myGlobal from '../../model/Global';
import {SessionService} from '../../bonita/rest-api/session.service';
import {ProcessService} from '../../bonita/process/process.service';
import {Router} from '@angular/router';
import {InstanceInfo} from '../../bonita/process/instance-info';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';
import {TaskService} from '../../bonita/task/task.service';
import {SalesforceService} from '../../bonita/salesforce/salesforce.service';
import {forkJoin, Observable} from 'rxjs';
import {UIService} from '../../services/ui.service';
import {BusinessService} from '../../services/business/business.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  emailPattern = myGlobal.emailPattern;
  data: ApplicationForm = new ApplicationForm();
  salutations = myGlobal.salutations;
  docTypes = myGlobal.docTypes;
  sexos = myGlobal.sexos;
  maritalStatuses = myGlobal.maritalStatuses;
  grados = myGlobal.grados;
  instanceInfo: InstanceInfo;
  ht: HumanTaskDTO;

  constructor(private ss: SessionService, private ps: ProcessService, private ts: TaskService, private bs: BusinessService,
              private sfs: SalesforceService, private ui: UIService, private router: Router) {
  }

  ngOnInit(): void {
    //Se instancia el proceso y se toma la actividad para ejecutarla.
    this.ps.instantiateProcess().subscribe(d => {
      this.instanceInfo = d;
      console.log('Instancia del proceso creada ' + d.caseId);
      // Se consulta la información de la tarea
      this.ts.queryTaskByUserAndCase(this.ss.sessionInfo.user_id, this.instanceInfo.caseId).subscribe(x => {
        this.ht = x[0];
        console.log('Identificador de la tarea ' + this.ht.id);
        //Se toma la tarea para que quede asignada al usuario.
        this.ts.takeTask({taskId: this.ht.id, userId: this.ss.sessionInfo.user_id}).subscribe(
          s => {
            console.log('Resultado de tomar la tarea ' + s);
          }
        );
      });
    });
  }

  getData(): Observable<any> {
    const r1 = this.sfs.createContact(this.data.client);
    const r2 = this.sfs.createContact(this.data.refC);
    const r3 = this.sfs.createContact(this.data.refP);
    return forkJoin([r1, r2, r3]);
  }

  save() {
    // Se graba la información en Salesforce del Cliente (Se asume que siempre es nuevo, por temas de facilidad
    this.getData().subscribe(c => {
      this.data.requestD.contactId = c[0].id;
      this.data.requestD.refCId = c[1].id;
      this.data.requestD.refPId = c[2].id;
      //Se graba la información de la solicitud.
      this.bs.createRequest(this.data.requestD).subscribe(r => {
        //Se finaliza la tarea en Bonita
        const ingresos = r.salary + r.income + r.rent + r.commissions;
        const gastos = r.erent + r.expenses + r.loans + r.cards;
        this.ts.endTaskRequest(this.ht.id, {
          clientId: r.contactId,
          refCId: r.refCId,
          refPId: r.refPId,
          formularioId: r.requestId,
          ingresosVal: ingresos,
          gastosVal: gastos
        })
          .subscribe(y => {
            this.ui.showMessage(
              {
                title: 'Notificaci\xf3n',
                type: 'SUCCESS',
                message: 'Solicitud radicada con número: ' + r.requestId,
                buttons: [{label: 'Aceptar', color: 'primary', value: 'yes', icon: 'done_all'}]
              }
            )
              .subscribe(x => {
                this.router.navigate(['inicio']);
              });
          });
      });
    });
  }

}
