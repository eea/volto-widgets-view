import React from 'react';
import cx from 'classnames';

export const ArrayWidget = ({ children, className }) => (
  <span className={cx(className, 'array', 'widget')}>
    {children
      ? children.map((child) => (
          <span key={child.token || child.title || child}>
            {child.title || child.token || child}
          </span>
        ))
      : ''}
  </span>
);
