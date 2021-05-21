import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GridProps } from './Grid';

const Grid = styled.div<GridProps>`
  ${({ alignSelf, container }) => css`
    transition: opacity 0.3s ease-out;
    ${alignSelf &&
    css`
      align-self: ${alignSelf};
    `}

    ${container &&
    css`
      display: grid;
    `}
  `}
`;

export const S = { Grid };
