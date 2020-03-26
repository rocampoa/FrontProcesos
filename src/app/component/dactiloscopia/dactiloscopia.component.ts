import { Component, OnInit } from '@angular/core';
import {CasesDataSource} from '../../datasources/cases-data-source';
import {TaskService} from '../../bonita/task/task.service';
import {SessionService} from '../../bonita/rest-api/session.service';
import {UIService} from '../../services/ui.service';
import {HumanTaskDTO} from '../../bonita/task/human-task-d-t-o';

@Component({
  selector: 'app-dactiloscopia',
  templateUrl: './dactiloscopia.component.html',
  styleUrls: ['./dactiloscopia.component.css']
})
export class DactiloscopiaComponent implements OnInit {

  private taskName = 'Dactiloscopia';
  datasource: CasesDataSource;
  displayedColumns: string[] = ['caseId', 'name', 'id', 'description', 'ejecutar'];

  constructor(private ts: TaskService, private ss: SessionService, private ui: UIService) {
  }

  ngOnInit(): void {
    this.datasource = new CasesDataSource(this.ts);
    this.datasource.loadTask(this.ss.sessionInfo.user_id, this.taskName);
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
                this.datasource.loadTask(this.ss.sessionInfo.user_id, this.taskName);
              });
          });
      }
    );
  }

}
