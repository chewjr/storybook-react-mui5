import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const MyButton = ({ backgroundColor, label, variant, ...props }) => {
  return (
    <Button
      variant={variant}
      className={['storybook-button', `storybook-button--${variant}`]}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};

MyButton.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What variant should the button be?
   */
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
  backgroundColor: null,
  variant: 'text',
  onClick: undefined,
};
