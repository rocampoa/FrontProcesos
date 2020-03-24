import {IButtonMessage} from './ibutton-message';

export interface IMessage {
  title: string;
  type: 'INFO' | 'WARNING' | 'SUCCESS' | 'ALERT';
  message: string;
  activeButton?: boolean;
  buttons: IButtonMessage[];
}
