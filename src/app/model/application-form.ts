import {Contact} from '../bonita/salesforce/contact';
import {RequestData} from './request-data';

export class ApplicationForm {
  client: Contact = new Contact();
  refP: Contact = new Contact();
  refC: Contact = new Contact();
  requestD: RequestData = new RequestData();
}

