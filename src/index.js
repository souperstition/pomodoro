import { createRoot } from 'react-dom/client';
import * as React from 'react';
import App from './App';

// fcc tests don't pass with new render method, if you need to pass tests use:
// import * as ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(<App />);
