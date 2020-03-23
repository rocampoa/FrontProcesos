import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BonitaModule} from './bonita/bonita.module';
import {MaterialModule} from './material.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BonitaModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
