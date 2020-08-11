import React from 'react';
import cx from 'classnames';

export const TextWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'text', 'widget')}>
      {children ? children(value) : value}
    </span>
  ) : (
    ''
  );
