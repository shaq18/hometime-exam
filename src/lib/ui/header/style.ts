import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Header = styled.header`
  ${({ theme: { colors } }: any) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `}
`;

export const S = { Header };
