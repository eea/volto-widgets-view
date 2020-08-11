import React from 'react';
import cx from 'classnames';
import moment from 'moment';

export const DatetimeWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'datetime', 'widget')}>
      {children
        ? children(moment(value).format('lll'))
        : moment(value).format('lll')}
    </span>
  ) : (
    ''
  );
