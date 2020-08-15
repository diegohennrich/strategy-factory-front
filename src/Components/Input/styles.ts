import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isError: boolean;
  bgColor?: string;
  borderColor?: string;
  color?: string;
}

export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 16px;

  border: solid 2px;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : '#232129'} ;
  color: #666360;

  display: flex;
  align-items: center;



  ${(props) =>
    props.isError &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    color:  ${(props) => (props.color ? props.color : '#000000')};;
    background: transparent;
    border: 0;

    & ::placeholder {
      color: #666360;
    }
  }


  svg {
    margin-right: 15px;
  }

  & ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        margin: 0;
  }
  & ::-webkit-outer-spin-button{
      -webkit-appearance: none;
      margin: 0;
  }
`;

export const Errors = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
