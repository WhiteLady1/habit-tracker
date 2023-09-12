import React from 'react';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';

interface NewHabitProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onSave: (item: NewHabitContent) => void;
};

export interface NewHabitContent {
  text?: string;
  done?: boolean;
  origin?: number;
};

export const NewHabit: React.FC<NewHabitProps> = ({
  isOpen,
  onOpenChange,
  onSave
}) => {
  const [newHabit, setNewHabit] = React.useState<NewHabitContent>();

  const saveNewHabit = () => {
    if (newHabit) {
      onSave(newHabit);
    };
    onOpenChange();
  };

  const cancelNewHabit = () => {
    setNewHabit(undefined);
    onOpenChange();
  };

  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalHeader>New habit</ModalHeader>
        <ModalBody>
          <Input
            label="Name of habit"
            onChange={(e) =>  setNewHabit({
              ...newHabit,
              text: e.target.value,
              done: false,
              origin: Date.now()
            })}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={saveNewHabit}>Save</Button>
          <Button color="danger" onPress={cancelNewHabit}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
