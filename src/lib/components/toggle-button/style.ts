import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ToggleButton = styled.button`
  ${({ theme: { colors } }: any) => css`
    padding: 0.5rem;
    width: 4rem;
    border-radius: 999px;
    background-color: ${colors.bg[300]};
  `}
`;

const Indicator = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 999px;
  background-color: white;
`;

export const S = { ToggleButton, Indicator };
