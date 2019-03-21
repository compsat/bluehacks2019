import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyCZ4MxhQ_Q3pnYTv5DbC5k0FpL4BjndFv0",
    authDomain: "blue-hacks-2019.firebaseapp.com",
    databaseURL: "https://blue-hacks-2019.firebaseio.com",
    projectId: "blue-hacks-2019",
    storageBucket: "blue-hacks-2019.appspot.com",
    messagingSenderId: "663985587476"
};

firebase.initializeApp(config);

ReactDOM.render((
	<App />
), document.getElementById('root'));

