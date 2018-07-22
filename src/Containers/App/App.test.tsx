import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const langChange = (newLanguage: string) => {
  // 
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const language = {}
  ReactDOM.render(<App handleLanguageChange={langChange} language={language}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
