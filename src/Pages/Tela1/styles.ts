import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
  }

  li:last-child {
    margin-top: 20px;
  }

  button {
    background: #29166f;
    border: 0;
    border-radius: 5px;
    width: 200px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 20px 34px;
    font-size: 18px;

    &:hover {
      background: ${shade(0.6, '#FFFFFF')};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`;

interface LogoProps {
  w: string;
  h: string;
}
export const Logo = styled.img<LogoProps>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;

export const Title = styled.h1`
  font-size: 18px;
  line-height: 30px;
  text-align: center;
`;

export const Subtitle = styled.span`
  line-height: 27px;
  text-align: center;
  font-size: 16px;
`;
