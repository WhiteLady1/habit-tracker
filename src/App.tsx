import React from 'react';
import { Button, NextUIProvider, useDisclosure } from '@nextui-org/react';
import './App.css';

import { Calendar, CheckboxList, NewHabit, NewHabitContent } from './components';
import { PlusIcon } from './components/icons';

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [newHabit, setNewHabit] = React.useState<NewHabitContent>();

  const getNewHabit = (habit: NewHabitContent) => {
    setNewHabit(habit);
  };

  React.useEffect(() => {
    console.log(newHabit);
  }, [newHabit]);

  return (
    <NextUIProvider>
      <div className="App">
        <h1 className="text-3xl font-bold underline">
          Habit tracker
        </h1>
        <NewHabit
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onSave={getNewHabit}
        />
        <Calendar fulfilledDays={DAYS_OK} unFulfilledDays={DAYS_FAIL} />
        <CheckboxList list={LIST}/>
        <Button isIconOnly onClick={onOpen}>
          <PlusIcon size={20} />
        </Button>
      </div>
    </NextUIProvider>
  );
};

export default App;
