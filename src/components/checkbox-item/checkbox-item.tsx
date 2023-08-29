import React from 'react';
import { Button, Card, CardBody, Checkbox } from '@nextui-org/react';
import { AddIcon } from './add-icon';

export interface CheckboxItemProps {
  text: string;
  onCheckboxChange?: (isSelected: boolean) => void;
};

export const CheckboxItem: React.FC<CheckboxItemProps> = ({
  text,
  onCheckboxChange,
}) => (
  <Card className="w-[300px]">
    <CardBody className="flex flex-row justify-between grow">
      <Checkbox className="max-w-[250px]" onValueChange={onCheckboxChange ? (isSelected) => onCheckboxChange(isSelected) : undefined}>{text}</Checkbox>
      <Button isIconOnly variant="light" aria-label="Edit" radius="lg">
        <AddIcon size={20} />
      </Button>
    </CardBody>
  </Card>
);
