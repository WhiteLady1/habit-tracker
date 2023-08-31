import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { Calendar, CheckboxItem } from './components';

const DAYS_OK = [new Date(2023, 8, 15), new Date(2023, 8, 17)];
const DAYS_FAIL = [new Date(2023, 8, 16), new Date(2023, 8, 19)];

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
            Habit tracker
          </h1>
          <CheckboxItem
            text="Meditation for beginers, doing next lesson"
            onCheckboxChange={(isSelected) => console.log(isSelected)}
          />
          <Calendar fulfilledDays={DAYS_OK} unFulfilledDays={DAYS_FAIL} />
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
