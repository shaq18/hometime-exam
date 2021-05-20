import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HeadingProps } from './Heading';

const Heading = styled.h1<HeadingProps>`
  ${({ theme: { colors } }: any) => css`
    color: ${colors.text[100]};
  `}
`;

export const S = { Heading };
