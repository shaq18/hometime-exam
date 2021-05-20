import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }: any) => css`
    max-width: 1440px;
    width: 100%;
    padding-left: 5rem;
    padding-right: 5rem;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const S = { Container };
