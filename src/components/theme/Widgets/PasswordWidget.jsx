import React from 'react';
import cx from 'classnames';

export const PasswordWidget = ({ className }) => (
  <span className={cx(className, 'password', 'widget')}>********</span>
);
