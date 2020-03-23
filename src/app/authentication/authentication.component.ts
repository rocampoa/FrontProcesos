import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../bonita/authentication/authentication.service';
import {BonitaCredentials} from '../bonita/authentication/bonitaCredentials';
import {SessionService} from '../bonita/rest-api/session.service';
import {CookieService} from 'ngx-cookie-service';
import {ProcessService} from '../bonita/process/process.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private authService: AuthenticationService, private sessionService: SessionService, private ps: ProcessService) { }

  ngOnInit(): void {
    this.testAuthentication();
  }

  private testAuthentication() {
    this.authService.login(new BonitaCredentials('actor1', '123'))
      .subscribe(data => {
        this.sessionService.dataSession = data;
        this.sessionService.getSession().subscribe(s => {
          console.log(s.user_id, s.user_name);
        });
        this.ps.getProcessInfo().subscribe(z => this.sessionService.processInfo = z[0]);
      });
  }

}
