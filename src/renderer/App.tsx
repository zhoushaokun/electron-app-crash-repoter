import React, { useEffect } from 'react';

function App(): JSX.Element {
  useEffect(() => {
    window.ipcAPI?.rendererReady();
  }, []);

  const onClick = () => {
    let arr = [];
    while (true) {
      arr.push(new Array(1000000));
    }
  }

  return (
    <div className="app">
      <h4>Welcome to React, Electron and TypeScript</h4>
      <p onClick={onClick}>Hello</p>
    </div>
  );
}

export default App;
