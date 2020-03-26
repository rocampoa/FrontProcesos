import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RequestData} from '../../model/request-data';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private readonly URL = environment.backendBusiness;

  constructor(private http: HttpClient) {
  }

  createRequest(data: RequestData): Observable<RequestData> {
    return this.http.post<RequestData>(this.URL, data);
  }

  queryRequest(requestId: number): Observable<RequestData> {
    return this.http.get<RequestData>(this.URL + requestId);
  }

}
