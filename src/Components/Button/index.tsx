import React, { FC, ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  color?: string;
  size?: string;
  icon?: ComponentType<IconBaseProps>;
  iconOrientation?: string;
}
const Button: FC<ButtonProps> = ({
  children,
  bgColor,
  color,
  icon: Icon,
  iconOrientation,
  ...rest
}) => {
  return (
    <>
      <Container
        iconOrientation={iconOrientation}
        bgColor={bgColor}
        color={color}
        type="button"
        {...rest}
      >
        {iconOrientation === 'left' && Icon && (
          <Icon size={20} color="#FFFFFF" />
        )}
        {children}
        {iconOrientation === 'right' && Icon && (
          <Icon size={20} color="#FFFFFF" />
        )}
      </Container>
    </>
  );
};

export default Button;
