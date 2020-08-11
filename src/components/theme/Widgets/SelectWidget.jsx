import React from 'react';
import cx from 'classnames';

export const SelectWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'select', 'widget')}>
      {children
        ? children(value?.title || value?.token || value)
        : value?.title || value?.token || value}
    </span>
  ) : (
    ''
  );
