import React from 'react';
import './button.css';

export interface y2kButtonProps {
  /**
   * What background color to use
   */
  color: 'blue' | 'red' | 'green'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  color,
  label,
  ...props
}: y2kButtonProps) => {
  const mode = 'y2k-button-' + color
  return (
    <button
      type="button"
      className={['y2k-button', `y2k-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;