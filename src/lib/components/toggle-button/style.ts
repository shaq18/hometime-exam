import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Indicator = styled.div<{ darkMode: boolean }>`
  ${({ darkMode }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    border-radius: 999px;
    background-color: white;
    transition: transform 0.3s ease-out;

    ${darkMode &&
    css`
      transform: translateX(calc(5rem - 3rem));
    `};
  `}
`;

const ToggleButton = styled.button`
  ${({ theme: { colors } }: any) => css`
    padding: 0.5rem;
    width: 5rem;
    border-radius: 999px;
    background-color: ${colors.bg[300]};
    transition: background-color 0.3s ease-out;
  `}
`;

export const S = { Indicator, ToggleButton };
