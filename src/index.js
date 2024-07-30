import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodoContext } from './Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoContext>
        <App/>
    </TodoContext>
);




