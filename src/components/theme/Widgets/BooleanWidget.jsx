import React from 'react';
import cx from 'classnames';

export const BooleanWidget = ({ children, className }) => (
  <span className={cx(className, 'boolean', 'widget')}>
    {children ? 'Yes' : 'No'}
  </span>
);
