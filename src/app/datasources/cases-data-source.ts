import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {HumanTaskDTO} from '../bonita/task/human-task-d-t-o';
import {TaskService} from '../bonita/task/task.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class CasesDataSource implements DataSource<HumanTaskDTO> {

  private taskSubject = new BehaviorSubject<HumanTaskDTO[]>([]);

  constructor(private ts: TaskService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<HumanTaskDTO[] | ReadonlyArray<HumanTaskDTO>> {
    return this.taskSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.taskSubject.complete();
  }

  loadTask(userId: string, taskName: string) {
    this.ts.queryTaskByUser(userId).pipe(
      map(result => result.filter(k => k.name.includes(taskName)))
    ).subscribe(data => {
      this.taskSubject.next(data);
    });
  }

}
