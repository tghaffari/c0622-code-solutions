import React from 'react';
import ReactDOM from 'react-dom/client';
import ValidatePassword from './validated-input';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<ValidatePassword />);
