import React from 'react';
import { S } from './style';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  alignSelf?: 'start' | 'center' | 'end';
  as?: any;
  container?: boolean | undefined;
  gap?: number | string;
  item?: boolean | undefined;
}

const Grid = ({ alignSelf, as, container, gap, item, ...props }: GridProps) => {
  return (
    <S.Grid {...props} as={as} gap={gap} container={container} item={item} alignSelf={alignSelf} />
  );
};

export default Grid;
