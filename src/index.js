import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGhost, faCircleHalfStroke, faBars, faXmark, faMagnifyingGlass, faSpinner, faWindowMaximize } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faGhost, faCircleHalfStroke, faBars, faXmark, faMagnifyingGlass, faSpinner, faWindowMaximize)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
