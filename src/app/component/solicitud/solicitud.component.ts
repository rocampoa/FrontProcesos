import {Component, OnInit} from '@angular/core';
import {ApplicationForm} from '../../model/application-form';
import {IDatoRef} from '../../model/idato-ref';
import * as myGlobal from '../../model/Global';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  emailPattern = myGlobal.emailPattern;
  data: ApplicationForm = new ApplicationForm();
  salutations = myGlobal.salutations;
  docTypes = myGlobal.docTypes;
  sexos = myGlobal.sexos;
  maritalStatuses = myGlobal.maritalStatuses
  grados = myGlobal.grados;

  constructor() {
  }

  ngOnInit(): void {
  }

}
