import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

ReactDOM.render(
  <BrowserRouter>
    {/* <MoralisProvider appId="aI0I9HHmFO8MyjphDmqx9TEdPuJgK29iQo17fYf5" serverUrl="https://zzh74rwye7iu.usemoralis.com:2053/server"> */}
      <App />
    {/* </MoralisProvider> */}
  </BrowserRouter>,
  document.getElementById('root')
);
