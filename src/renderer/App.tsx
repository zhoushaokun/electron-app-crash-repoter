import React, { useEffect } from 'react';
import { runAdd } from './plugins/client';

function App(): JSX.Element {
  useEffect(() => {
    window.ipcAPI?.rendererReady();
  }, []);

  const onClick = () => {
    runAdd();
  };
  return (
    <div className="app">
      <h4>Welcome to React, Electron and TypeScript</h4>
      <p>Hello</p>
      <button onClick={onClick}>点击</button>
    </div>
  );
}

export default App;
