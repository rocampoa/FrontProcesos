export interface BonitaSessionInterface {
  copyright: string;
  is_guest_user: boolean;
  user_id: string;
  user_name: string;
  session_id: string;
  conf: string;
  is_technical_user: boolean;
  version: string;
  tenant?: string;
}
