import React from 'react';
import { NextUIProvider, Button } from '@nextui-org/react';
import './App.css';

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Habit tracker
          </h1>
          <Button color="primary">Text NextUI</Button>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
