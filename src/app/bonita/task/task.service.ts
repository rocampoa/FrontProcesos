import {Injectable} from '@angular/core';
import {SessionService} from '../rest-api/session.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HumanTaskDTO} from './human-task-d-t-o';
import {Observable} from 'rxjs';
import {ITakeTaskDTO} from './i-take-task-d-t-o';
import {ITaskRequestDTO} from './itask-request-dto';
import {ITaskValidateDTO} from './itask-validate-dto';
import {PollResponseDTO} from '../../model/poll-response-dto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly URL = `${environment.backendUrl}/humanTask`;

  constructor(private http: HttpClient, private ss: SessionService) {
  }

  queryTaskByUserAndCase(userId: string, caseId: string): Observable<HumanTaskDTO[]> {
    return this.http.get<HumanTaskDTO[]>(this.URL, {
      params: new HttpParams()
        .set('userId', userId)
        .set('caseId', caseId)
    });
  }

  queryTaskByUser(userId: string): Observable<HumanTaskDTO[]> {
    return this.http.get<HumanTaskDTO[]>(this.URL, {
      params: new HttpParams()
        .set('userId', userId)
    });
  }

  takeTask(data: ITakeTaskDTO): Observable<string> {
    return this.http.put<string>(this.URL, data);
  }

  endTaskRequest(taskId: string, data: ITaskRequestDTO): Observable<any> {
    return this.http.post(`${this.URL}/endTaskRequest/${taskId}`, data);
  }

  endTaskValidate(taskId: string, data: ITaskValidateDTO): Observable<any> {
    return this.http.post(`${this.URL}/endTaskValidate/${taskId}`, data);
  }

  endTaskPoll(taskId: string, data: PollResponseDTO): Observable<any> {
    return this.http.post(`${this.URL}/endTaskPoll/${taskId}`, data);
  }

}
