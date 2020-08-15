import styled from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  input {
    background: transparent;
    border: 0;
    margin-right: 5px;
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
