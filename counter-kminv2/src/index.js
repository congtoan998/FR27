import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './component/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = new Counter()
root.render(element)
