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
import {SolicitudComponent} from './component/solicitud/solicitud.component';
import {NumberDirective} from './directives/number.directive';
import {VacioComponent} from './component/vacio/vacio.component';
import {ValidarComponent} from './component/validar/validar.component';
import {ValidarSolicitudComponent} from './component/validar-solicitud/validar-solicitud.component';
import {BusinessService} from './services/business/business.service';
import { DactiloscopiaComponent } from './component/dactiloscopia/dactiloscopia.component';
import { ReferenciasComponent } from './component/referencias/referencias.component';
import { ConfirmarReferenciasComponent } from './component/confirmar-referencias/confirmar-referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MessageComponent,
    SolicitudComponent,
    NumberDirective,
    VacioComponent,
    ValidarComponent,
    ValidarSolicitudComponent,
    DactiloscopiaComponent,
    ReferenciasComponent,
    ConfirmarReferenciasComponent
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
  providers: [CookieService, UIService, BusinessService],
  entryComponents: [MessageComponent, ValidarSolicitudComponent, ConfirmarReferenciasComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
