import {IDatoRef} from './idato-ref';

export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const salutations: IDatoRef[] = [{cod: 'Mr.', description: 'Sr.'}, {cod: 'Mrs.', description: 'Sra.'},
  {cod: 'Ms.', description: 'Srta.'}, {cod: 'Dr.', description: 'Dr.'}, {cod: 'Prof.', description: 'Prof.'}];

export const docTypes: IDatoRef[] = [{cod: 'CC', description: 'C\xe9dula'}, {cod: 'NIT', description: 'NIT'},
  {cod: 'PAS', description: 'Pasaporte'}];

export const sexos: IDatoRef[] = [{cod: 'M', description: 'Masculino'}, {cod: 'F', description: 'Femenino'},
  {cod: 'O', description: 'Otro'}];

export const maritalStatuses: IDatoRef[] = [{cod: 'Soltero', description: 'Soltero'}, {cod: 'Casado', description: 'Casado'},
  {cod: 'Viudo', description: 'Viudo'}, {cod: 'U. Libre', description: 'Uni\xf3n Libre'}];

export const grados: IDatoRef[] = [{cod: 'Primaria', description: 'Primaria'}, {cod: 'Bachillerato', description: 'Bachillerato'},
  {cod: 'Universitario', description: 'Univesitario'}, {cod: 'Postgrado', description: 'Postgrado'}];

export const respuestas: IDatoRef[] = [{cod: '4', description: 'Excelente'}, {cod: '3', description: 'Bueno'},
                                       {cod: '2', description: 'Regular'}, {cod: '1', description: 'Malo'}];
