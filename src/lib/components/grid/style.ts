import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GridProps } from './Grid';

const Grid = styled.div<GridProps>`
  ${({ container }) => css`
    ${container &&
    css`
      display: grid;
    `}
  `}
`;

export const S = { Grid };
