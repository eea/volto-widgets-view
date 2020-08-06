import React from 'react';
import cx from 'classnames';

export const PasswordWidget = ({ children, className }) => (
  <span className={cx(className, 'password', 'widget')}>
    {children ? '********' : ''}
  </span>
);
