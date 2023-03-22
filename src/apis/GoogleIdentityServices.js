// A class that initializes the Google Identity Services library
// and returns the token client for use
export default class GoogleIdentityServices {
  constructor(clientId, scopes, callback = '') {
    this.clientId = clientId;
    this.scopes = scopes;
    this.callback = callback;
  }

  set gis(gisObject) {
    this._gis = gisObject;
  }

  get gis() {
    return this._gis;
  }

  get tokenIsInitialized() {
    return this._gis !== null;
  }
 
  get tokenClient() {
    if (this._tokenClient !== null) {
      return this._tokenClient;
    } else {
      throw new Error('Token client is not initialised!');
    }
  }

  set tokenClient(clientObj) {
    this._tokenClient = clientObj;
  }

  initializeTokenClient() {
    if (this._gis) {
      this.tokenClient = this._gis.initTokenClient({
        client_id: this.clientId,
        scope: this.scopes,
        callback: this.callback
      });
    } else {
      throw new Error('GIS library not loaded :(');
    }
  }
}