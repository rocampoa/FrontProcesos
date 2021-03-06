import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {ProcessInfo} from './process-info';
import {InstanceInfo} from './instance-info';
import {SessionService} from '../rest-api/session.service';
import {ProcessVariableDTO} from './process-variable-dto';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private readonly URL = `${environment.backendUrl}/process/`;

  constructor(private http: HttpClient, private ss: SessionService) {
  }

  getProcessInfo(): Observable<ProcessInfo[]> {
    return this.http.get<ProcessInfo[]>(`${this.URL}queryProcess`, {
      params: new HttpParams()
        .set('processName', environment.processName)
    });
  }

  instantiateProcess(): Observable<InstanceInfo> {
    return this.http.post<InstanceInfo>(`${this.URL}processInstantiation/${this.ss.processInfo.id}`, null);
  }

  queyrVar(caseId: string, varName: string): Observable<ProcessVariableDTO> {
    return this.http.get<ProcessVariableDTO>(`${this.URL}queryVar`, {
      params: new HttpParams()
        .set('caseId', caseId)
        .set('varName', varName)
    });
  }
}
