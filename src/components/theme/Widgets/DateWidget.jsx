import React from 'react';
import cx from 'classnames';
import moment from 'moment';

export const DateWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'date', 'widget')}>
      {children
        ? children(moment(value).format('ll'))
        : moment(value).format('ll')}
    </span>
  ) : (
    ''
  );
