import React from 'react';
import cx from 'classnames';

export const SelectWidget = ({ children, className }) => (
  <span className={cx(className, 'select', 'widget')}>
    {children?.title || children?.token || children}
  </span>
);
