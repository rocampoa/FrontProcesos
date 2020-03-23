import {BonitaSessionInterface} from './bonita-session-interface';

export class BonitaSession implements BonitaSessionInterface {
  conf = '';
  copyright = '';
  is_guest_user = false;
  is_technical_user = false;
  session_id = '';
  tenant = '';
  user_id = '';
  user_name = '';
  version = '';
}
