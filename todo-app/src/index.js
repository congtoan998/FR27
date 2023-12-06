import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/todoapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
let component = App();
root.render( component);
