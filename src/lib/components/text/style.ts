import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextProps } from './Text';

const Text = styled.p<TextProps>`
  ${({ theme: { colors }, subTitle, size, weight }: any) => css`
    font-size: ${size ? size : '1.25rem'};
    font-weight: ${weight ? weight : '400'};
    font-family: 'Newsreader', serif;
    color: ${colors.text[100]};

    ${subTitle &&
    css`
      margin-bottom: 0.25rem;
      font-size: 12px;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${colors.text[200]};
    `}
  `}
`;

export const S = { Text };
