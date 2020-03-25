import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from './bonita/rest-api/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDisabled = false;

  constructor(private router: Router, private ss: SessionService) {
  }

  ngOnInit(): void {
    this.ss.isAuthenticate.subscribe(d => this.isDisabled = !d);
  }

  goRequestForm() {
    this.router.navigate(['solicitud']);
  }

  login() {
    this.router.navigate(['login']);
  }

  exitApp() {
    this.router.navigate(['login']);
  }
}
