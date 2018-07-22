import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App/App';
import './index.css';

const DEFAULT_LANGUAGE = "de";
let language;
import registerServiceWorker from './registerServiceWorker';

const onLanguageChange = (newLanguage: string) => {
  try {
    language = require("./Languages/" + newLanguage + ".json");
    ReactDOM.render(<App handleLanguageChange={onLanguageChange} language={language}/>,document.getElementById('root') as HTMLElement);
  } catch {
    language = require("./Languages/" + DEFAULT_LANGUAGE + ".json");
    ReactDOM.render(<App handleLanguageChange={onLanguageChange} language={language}/>,document.getElementById('root') as HTMLElement);
  }
}

onLanguageChange(localStorage.getItem("lang") || DEFAULT_LANGUAGE);

ReactDOM.render(<App handleLanguageChange={onLanguageChange} language={language}/>,document.getElementById('root') as HTMLElement);
registerServiceWorker();
