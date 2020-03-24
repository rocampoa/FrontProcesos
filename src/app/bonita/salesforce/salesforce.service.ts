import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SalesforceAuthResponse} from './salesforce-auth-response';
import {environment} from '../../../environments/environment';
import {SalesforceAuth} from './salesforce-auth';
import {Contact} from './contact';
import {ContactResponse} from './contact-response';
import {QueryContactResponse} from './query-contact-response';

@Injectable({
  providedIn: 'root'
})
export class SalesforceService {

  private readonly url = environment.salesforceLoginUrl;

  constructor(private http: HttpClient) {
  }

  authenticateSalesforce(): Observable<SalesforceAuthResponse> {
    const data = new SalesforceAuth();
    return this.http.post<SalesforceAuthResponse>(this.url, data);
  }

  createContact(data: Contact): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.url}create`, data);
  }

  queryContact(contactId: string): Observable<QueryContactResponse> {
    return this.http.get<QueryContactResponse>(`${this.url}${contactId}`);
  }
}
