import styled, { css } from 'styled-components';
import Editor from 'react-simple-code-editor';

interface Props {
  isFocused?: boolean;
  isFilled?: boolean;
}
export const TextAreaInput = styled(Editor)<Props>`
  border: solid 2px #000000;
  border-radius: 10px;
  color: #000000;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #000000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
`;
