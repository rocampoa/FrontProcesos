import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BonitaSession} from './bonita-session';
import {BonitaSessionInterface} from './bonita-session-interface';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {DataSession} from '../authentication/data-session';
import {ProcessInfo} from '../process/process-info';
import {InstanceInfo} from '../process/instance-info';
import {SalesforceAuthResponse} from '../salesforce/salesforce-auth-response';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly URL = `${environment.backendUrl}/session`;
  sessionInfo: BonitaSession = new BonitaSession();
  dataSession: DataSession = new DataSession();
  processInfo: ProcessInfo = new ProcessInfo();
  sfInfo: SalesforceAuthResponse = new SalesforceAuthResponse();
  instanceInfo: InstanceInfo = new InstanceInfo();

  constructor(private http: HttpClient) {
  }

  getSession(): Observable<BonitaSessionInterface> {
    return this.http.get<BonitaSessionInterface>(this.URL)
      .pipe(
        map(response => {
          this.mapBonitaSession(response);
          return response;
        })
      );
  }

  private mapBonitaSession(response: BonitaSessionInterface) {
    const session = new BonitaSession();
    session.conf = response.conf;
    session.copyright = response.copyright;
    session.is_guest_user = response.is_guest_user;
    session.is_technical_user = response.is_technical_user;
    session.session_id = response.session_id;
    session.user_id = response.user_id;
    session.user_name = response.user_name;
    session.version = response.version;
    this.sessionInfo = session;
  }

}
