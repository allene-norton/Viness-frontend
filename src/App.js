import React from 'react';
import Initial from './Containers/Initial'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import ErrorBoundary from '../src/Containers/ErrorBoundary'



function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Initial />
      </ErrorBoundary>
    </div>
  );
}

export default App;
