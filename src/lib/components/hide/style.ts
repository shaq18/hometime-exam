import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HideProps } from './Hide';

const Hide = styled.div<HideProps>`
  ${({ hide }) => css`
    transition: opacity 0.3s ease-out;
    ${hide &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
  `}
`;

export const S = { Hide };
