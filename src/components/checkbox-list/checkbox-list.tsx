import React from 'react';
import { Progress } from '@nextui-org/react';
import { CheckboxItem, CheckboxItemProps } from '../checkbox-item';

interface CheckboxListProps {
  list: CheckboxItemProps[];
};

export const CheckboxList: React.FC<CheckboxListProps> = ({
  list,
}) => {
  return (
    <div className="flex flex-col gap-2 py-3">
      <div className="text-end">
        <p>{2}/{3}</p>
        <Progress aria-label="Habit daily progres" value={2} maxValue={3} />
      </div>
      {list.map((item, index) => (
        <CheckboxItem
          key={index}
          text={item.text}
          onCheckboxChange={(isSelected) => console.log(isSelected)}
        />
      ))}
    </div>
  );
};
