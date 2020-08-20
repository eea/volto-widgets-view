import React from 'react';
import cx from 'classnames';

export const DescriptionWidget = ({ value, children, className }) =>
  value ? (
    <p
      className={cx(className, 'description', 'widget', 'documentDescription')}
    >
      {children ? children(value) : value}
    </p>
  ) : (
    ''
  );
