import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SolicitudComponent} from './component/solicitud/solicitud.component';
import {VacioComponent} from './component/vacio/vacio.component';
import {ValidarComponent} from './component/validar/validar.component';


const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'solicitud', component: SolicitudComponent},
  {path: 'inicio', component: VacioComponent},
  {path: 'validar', component: ValidarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
