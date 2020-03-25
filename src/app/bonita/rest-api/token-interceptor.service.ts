import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SessionService} from './session.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private ss: SessionService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url === `${environment.backendUrl}/loginBonita` || request.url === environment.salesforceLoginUrl) {
      return next.handle(request);
    } else if (request.url.includes('salesforce')) {
      return next.handle(request.clone({setHeaders: {Authorization: `Bearer ${this.ss.sfInfo.access_token}`}}));
    } else {
      const headers = request.headers
        .set('X-Bonita-API-Token', this.ss.dataSession.token)
        .set('JSESSIONID', this.ss.dataSession.sessionId);
      return next.handle(request.clone({headers: headers}));
    }
  }
}
