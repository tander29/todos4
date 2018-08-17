import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'



const Index = () => (

    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
