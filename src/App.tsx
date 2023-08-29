import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { CheckboxList } from './components';

const LIST = [
  {
    text: 'Medidations for beginers, next sesion...',
    done: false
  },
  {
    text: 'Repeate English',
    done: false
  },
  {
    text: 'Play the Stray',
    done: true
  }
];

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Habit tracker
          </h1>
          <CheckboxList list={LIST}/>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
