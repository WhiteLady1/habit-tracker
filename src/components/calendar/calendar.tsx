import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

interface CalendarProps {
  fulfilledDays: Date[];
  unFulfilledDays: Date[];
};

// ToDo: Custom modifiere according to https://react-day-picker.js.org/basics/modifiers#custom-modifiers and custom style for Day picked to https://react-day-picker.js.org/basics/styling

export const Calendar: React.FC<CalendarProps> = ({
  fulfilledDays,
  unFulfilledDays
}) => {
  const fulfilledStyle = { color: 'green', fontWeight: '700' };
  const unFulfilledStyle = { color: 'red' };

  return (
    <DayPicker
      defaultMonth={new Date(2023, 8, 1)}
      modifiers={{ fulfilled: fulfilledDays, unFulfilled: unFulfilledDays }}
      modifiersStyles={{ fulfilled: fulfilledStyle, unFulfilled: unFulfilledStyle }}
    />
  );
};
