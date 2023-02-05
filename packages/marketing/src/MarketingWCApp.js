import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

class MarketingWCApp extends HTMLElement {
  constructor() {
    super();
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    ReactDOM.render(<App />, mountPoint);
  }
}

customElements.define('marketing-app', MarketingWCApp);
