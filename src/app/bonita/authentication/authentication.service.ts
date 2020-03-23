import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BonitaCredentials} from './bonitaCredentials';
import {Observable} from 'rxjs';
import {DataSession} from './data-session';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly URL = `${environment.backendUrl}/loginBonita`;

  constructor(private http: HttpClient) {
  }

  login(credentials: BonitaCredentials): Observable<DataSession> {
    return this.http.post<DataSession>(this.URL, credentials);
  }

}
