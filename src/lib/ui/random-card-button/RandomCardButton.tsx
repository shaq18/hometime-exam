import React from 'react';
import { Button } from '../../components/button';
import { S } from './style';

interface RandomCardButtonProps {
  onClick: () => void;
}

const RandomCardButton = ({ onClick }: RandomCardButtonProps) => {
  return (
    <Button as={S.Button} onClick={onClick}>
      Show Random Card
    </Button>
  );
};

export default RandomCardButton;
