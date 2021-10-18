import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import config from '@plone/volto/registry';

export const DatetimeWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'datetime', 'widget')}>
      {children
        ? children(moment(value).format(config.settings.dateFormat || 'lll'))
        : moment(value).format(config.settings.dateFormat || 'lll')}
    </span>
  ) : (
    ''
  );
