import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from 'firebase/compat/app';

//import { FirebaseProvider } from './store/FirebaseContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
 
    <App />
  
  </FirebaseContext.Provider>
);

