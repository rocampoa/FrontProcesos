export class Contact {
  salutation = 'Mr.';
  firstName: string;
  lastName: string;
  idDocument__c: number;
  documentType__c = 'CC';
  documentIssuePlace__c = 'Bogota';
  numberChildren__c = 0;
  sex__c = 'M';
  maritalStatus__c? = 'Soltero';
  nationality__c = 'Colombiano';
  academicDegrees__c = 'Bachillerato';
  twitterUser__c: string;
  numberDependentPeople__c = 0;
  phone: string;
  mobilePhone: string;
  email: string;
  mailingStreet: string;
  mailingCity: string;
  mailingState: string;
  mailingPostalCode: string;
  mailingCountry = 'Colombia';
  description?: string;
}
