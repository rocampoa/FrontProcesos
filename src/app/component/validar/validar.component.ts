import {Component, OnInit} from '@angular/core';
import {CasesDataSource} from '../../datasources/cases-data-source';
import {TaskService} from '../../bonita/task/task.service';
import {SessionService} from '../../bonita/rest-api/session.service';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';
import {UIService} from '../../services/ui.service';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {

  datasource: CasesDataSource;
  displayedColumns: string[] = ['caseId', 'name', 'id', 'description', 'ejecutar'];

  constructor(private ts: TaskService, private ss: SessionService, private ui: UIService) {
  }

  ngOnInit(): void {
    this.datasource = new CasesDataSource(this.ts);
    this.datasource.loadTask(this.ss.sessionInfo.user_id);
  }

  validar(data: HumanTaskDTO) {
    //Se toma la tarea para que quede asignada al usuario.
    this.ts.takeTask({taskId: data.id, userId: this.ss.sessionInfo.user_id}).subscribe(
      s => {
        // Se muestra la tarea para su ejecución
        this.ui.showValidateRequest(data)
          .subscribe(x => {
            this.ts.endTaskValidate(data.id, {resultado: x})
              .subscribe(s => {
                this.datasource.loadTask(this.ss.sessionInfo.user_id);
              });
          });
      }
    );
  }

}
