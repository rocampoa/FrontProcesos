import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BonitaModule} from './bonita/bonita.module';
import {MaterialModule} from './material.module';
import {CookieService} from 'ngx-cookie-service';
import {LoginComponent} from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UIService} from './services/ui.service';
import {MessageComponent} from './component/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    BonitaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService, UIService],
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
