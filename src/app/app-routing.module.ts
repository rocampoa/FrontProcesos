import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {SolicitudComponent} from './component/solicitud/solicitud.component';


const routes: Routes = [
  {path: '', redirectTo: '/solicitud', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'solicitud', component: SolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
