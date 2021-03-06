import React from 'react';
import cx from 'classnames';
import { isBoolean } from 'lodash';

export const BooleanWidget = ({ value, children, className }) =>
  isBoolean(value) ? (
    <span className={cx(className, 'boolean', 'widget')}>
      {children ? children(value ? 'Yes' : 'No') : value ? 'Yes' : 'No'}
    </span>
  ) : (
    ''
  );
