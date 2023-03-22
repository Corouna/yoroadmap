import { createContext } from 'react';

const GoogleContext = createContext({});

const GoogleConstants = ({ children }) => {
    const CLIENT_ID = '296822687643-tt7uo7sv9t2rnbn0oeejos9r0vd627d9.apps.googleusercontent.com';
    const API_KEY = 'AIzaSyB2EABmyjQrwSz7H5g8PXOsEqsofqRv8YE';
    const APP_ID = "296822687643";
    const DISCOVERY_DOCS = "https://sheets.googleapis.com/$discovery/rest?version=v4";
    const SCOPES = "https://www.googleapis.com/auth/drive.file";

    return (
      <GoogleContext.Provider value={ {CLIENT_ID, API_KEY, APP_ID} }>
        { children }
      </GoogleContext.Provider>
    );
}

export { GoogleContext, GoogleConstants };