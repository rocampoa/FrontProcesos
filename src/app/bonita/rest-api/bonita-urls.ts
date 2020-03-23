import {environment} from '../../../environments/environment';

export class BonitaUrls {
  private _hostUrl: string;
  private _apiUrl: string;
  private _baseUrl: string;

  private readonly BASE_PATH = '/bonita';
  private readonly API_PATH = '/API';

  constructor() {
    this.hostUrl = environment.bonitaserverUrl;
  }

  set hostUrl(hostUrl: string) {
    this._hostUrl = hostUrl;
    this._baseUrl = hostUrl + this.BASE_PATH;
    this._apiUrl = this._baseUrl + this.API_PATH;
  }

  get hostUrl() {
    return this._hostUrl;
  }

  get apiUrl() {
    return this._apiUrl;
  }

  get baseUrl() {
    return this._baseUrl;
  }
}
