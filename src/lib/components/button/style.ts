import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './Button';

const Button = styled.button<ButtonProps>`
  ${({ theme: { colors }, color }: any) => css`
    position: relative;
    padding: 18px 18px 14px 18px;
    border-radius: 0.5rem;
    overflow: hidden;
    font-family: 'Newsreader', serif;

    span {
      position: relative;
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      top: 3px;
      right: 3px;
      bottom: 3px;
      left: 3px;
      border-radius: 6px;
    }

    ${color === 'primary' &&
    css`
      background-color: ${colors.primary[200]};
      border: 2px solid ${colors.primary[300]};
      color: white;

      &:hover {
        &::after {
          background-color: ${colors.primary[400]};
        }
      }

      &::after {
        border: 2px solid ${colors.primary[300]};
        background-color: ${colors.primary[100]};
        transition: background-color 0.3s ease-out;
      }
    `}
  `}
`;

export const S = { Button };
