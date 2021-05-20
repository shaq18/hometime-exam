import React from 'react';
import { S } from './style';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: any;
  container?: boolean | undefined;
  gap?: number | string;
  item?: boolean | undefined;
}

const Grid = ({ as, container, gap, item, ...props }: GridProps) => {
  return <S.Grid {...props} as={as} gap={gap} container={container} item={item} />;
};

export default Grid;
