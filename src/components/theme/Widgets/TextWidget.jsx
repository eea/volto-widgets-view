import React from 'react';
import cx from 'classnames';

export const TextWidget = ({ children, className }) => (
  <span className={cx(className, 'text', 'widget')}>{children}</span>
);
