import React from 'react';
import cx from 'classnames';
import moment from 'moment';
import config from '@plone/volto/registry';

export const DateWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'date', 'widget')}>
      {children
        ? children(moment(value).format(config.settings.dateFormat || 'll'))
        : moment(value).format(config.settings.dateFormat || 'll')}
    </span>
  ) : (
    ''
  );
