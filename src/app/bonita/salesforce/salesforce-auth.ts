import {environment} from '../../../environments/environment';

export class SalesforceAuth {
  grant_type = 'password';
  client_id = environment.salesforceClientId;
  client_secret = environment.salesforceClientSecret;
  username = environment.salesForceUserName;
  password = environment.salesForcePassword;
}
