export class Contact {
  salutation: string;
  firstName: string;
  lastName: string;
  idDocument__c: number;
  documentType__c: string;
  documentIssuePlace__c?: string;
  numberChildren__c = 0;
  sex__c: string;
  maritalStatus__c?: string;
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
  mailingCountry: string;
  description?: string;
}
