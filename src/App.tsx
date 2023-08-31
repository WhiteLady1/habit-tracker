import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';

import { Calendar, CheckboxList } from './components';

const DAYS_OK = [new Date(2023, 8, 15), new Date(2023, 8, 17)];
const DAYS_FAIL = [new Date(2023, 8, 16), new Date(2023, 8, 19)];

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
          <Calendar fulfilledDays={DAYS_OK} unFulfilledDays={DAYS_FAIL} />
          <CheckboxList list={LIST}/>
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
