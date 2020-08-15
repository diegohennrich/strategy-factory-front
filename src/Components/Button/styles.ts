import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  bgColor?: string;
  color?: string;
  size?: string;
  padding?: string;
  iconOrientation?: string;
}
export const Container = styled.button<ButtonProps>`
  width: ${(props) => props.size || '100%'};
  background: ${(props) => props.bgColor || '#29166f'};
  color: ${(props) => props.color || '#FFFFFF'};
  /* height: 56px; */
  padding: 10px 25px;
  border-radius: 10px;
  border: 0px;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;

  svg {
    margin-right: ${(props) =>
      props.iconOrientation === 'right' ? '0px' : '15px'};
    margin-left: ${(props) =>
      props.iconOrientation === 'left' ? '0px' : '15px'};
  }

  &:hover {
    background: ${shade(0.2, '#29166f')};
  }
`;
