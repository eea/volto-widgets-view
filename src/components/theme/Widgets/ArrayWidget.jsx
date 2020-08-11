import React from 'react';
import cx from 'classnames';

export const ArrayWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'array', 'widget')}>
      {value.map((item) => (
        <span key={item.token || item.title || item}>
          {children
            ? children(item.title || item.token || item)
            : item.title || item.token || item}
        </span>
      ))}
    </span>
  ) : (
    ''
  );
