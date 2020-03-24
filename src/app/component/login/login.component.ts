import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../bonita/authentication/authentication.service';
import {Router} from '@angular/router';
import {BonitaCredentials} from '../../bonita/authentication/bonitaCredentials';
import {SessionService} from '../../bonita/rest-api/session.service';
import {ProcessService} from '../../bonita/process/process.service';
import {SalesforceService} from '../../bonita/salesforce/salesforce.service';
import {UIService} from '../../services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isAuthenticated = false;

  constructor(private authService: AuthenticationService, private sessionService: SessionService, private ps: ProcessService,
              private sfs: SalesforceService, private uiService: UIService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(new BonitaCredentials(this.userName, this.password))
      .subscribe(data => {
          if (data.message === 'OK') {
            this.sessionService.dataSession = data;
            this.sessionService.getSession().subscribe(s => {
              console.log(s.user_id, s.user_name);
              this.ps.getProcessInfo().subscribe(z => this.sessionService.processInfo = z[0]);
              this.sfs.authenticateSalesforce()
                .subscribe(sdata => {
                  this.sessionService.sfInfo = sdata;
                  console.log('Token Salesforce' + sdata.access_token);
                });
            });
          } else {
            this.uiService.showMessage({
              title: 'Error de Ingreso',
              type: 'WARNING',
              message: data.message,
              buttons: [{label: 'Aceptar', color: 'primary', value: 'yes', icon: 'done_all'}]
            });
          }
        },
        error => {
          this.uiService.showMessage({
            title: 'Error de Ingreso',
            type: 'WARNING',
            message: error,
            buttons: [{label: 'Aceptar', color: 'primary', value: 'yes', icon: 'done_all'}]
          });
        });
  }

}
