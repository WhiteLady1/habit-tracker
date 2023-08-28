import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { CheckboxItem } from './components';

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
        </header>
      </div>
    </NextUIProvider>
  );
}

export default App;
