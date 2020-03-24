import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './rest-api/token-interceptor.service';
import {AuthenticationService} from './authentication/authentication.service';
import {SessionService} from './rest-api/session.service';
import {ProcessService} from './process/process.service';
import {SalesforceService} from './salesforce/salesforce.service';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthenticationService,
    SessionService,
    ProcessService,
    SalesforceService
  ]
})
export class BonitaModule {
}
