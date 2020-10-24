import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--dialog'];

const SIZES = [
  'btn--medium',
  'btn--large',
  'btn--mobile',
  'btn--mobile--active',
  'btn--wide',
];

const COLOR = [
  'primary',
  'blue',
  'red',
  'green',
  'chocolate',
  'light-blue',
  'dark-blue',
  'secondary',
  'agree-green',
  'disagree-red',
];

export const Button = ({
  children,
  type,
  onClick,
  onKeyPress,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      onKeyPress={onKeyPress}
      type={type}
    >
      {children}
    </button>
  );
};
