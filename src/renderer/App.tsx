import React, { useEffect } from 'react';
// import { runAdd } from './plugins/client';
import { PluginServer } from './plugins/plugin-server';

function App(): JSX.Element {
  const serverInstance = React.useRef<PluginServer>(new PluginServer());
  useEffect(() => {
    window.ipcAPI?.rendererReady();
    serverInstance.current.startServer();
  }, []);

  const onClick = () => {
    // runAdd();
    serverInstance.current.executeMethod<number[]>('RunAdd', [1, 2]);
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
