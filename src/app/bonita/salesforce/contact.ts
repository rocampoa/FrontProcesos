export class Contact {
  salutation = 'Mr.';
  firstName: string;
  lastName: string;
  idDocument__c: number;
  documentType__c = 'CC';
  documentIssuePlace__c?: string;
  numberChildren__c = 0;
  sex__c = 'M';
  maritalStatus__c? = 'Soltero';
  nationality__c?: string;
  academicDegrees__c?: string;
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
