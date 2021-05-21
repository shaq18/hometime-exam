import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { TextProps } from './Text';

const Text = styled.p<TextProps>`
  ${({ theme: { colors }, align, lineHeight, subTitle, size, weight }: any) => css`
    font-size: ${size ? size : '1.25rem'};
    font-weight: ${weight ? weight : '400'};
    font-family: 'Newsreader', serif;
    color: ${colors.text[100]};
    text-align: ${align ? align : 'left'};
    transition: color 0.3s ease-out;

    ${lineHeight &&
    css`
      line-height: ${lineHeight};
    `}

    ${subTitle &&
    css`
      line-height: 1.5;
      margin-bottom: 0.5rem;
      font-weight: 400;
      font-size: 12px;
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: ${colors.text[200]};
    `}
  `}
`;

export const S = { Text };
