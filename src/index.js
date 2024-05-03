import React from 'react';
import ReactDOM from 'react-dom'; // Use 'react-dom' instead of 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Render the App component
ReactDOM.render(
  <BrowserRouter basename="/Manage-landing">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root') // The element where you render your React app
);

// Report web vitals if needed
reportWebVitals();
