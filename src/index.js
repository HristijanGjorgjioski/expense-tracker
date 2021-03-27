import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="30f1e333-97bf-40a3-8bdd-c8e34c7610b5" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);
