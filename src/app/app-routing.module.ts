import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SolicitudComponent} from './component/solicitud/solicitud.component';
import {VacioComponent} from './component/vacio/vacio.component';
import {ValidarComponent} from './component/validar/validar.component';
import {DactiloscopiaComponent} from './component/dactiloscopia/dactiloscopia.component';
import {ReferenciasComponent} from './component/referencias/referencias.component';
import {EncuestaComponent} from './component/encuesta/encuesta.component';
import {RealizarEncuestaComponent} from './component/realizar-encuesta/realizar-encuesta.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'inicio', component: VacioComponent},
  {path: 'validar', component: ValidarComponent},
  {path: 'dactiloscopia', component: DactiloscopiaComponent},
  {path: 'referencias', component: ReferenciasComponent},
  {path: 'encuesta', component: RealizarEncuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
