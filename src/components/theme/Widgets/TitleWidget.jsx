import React from 'react';
import cx from 'classnames';

export const TitleWidget = ({ value, children, className }) =>
  value ? (
    <h1 className={cx(className, 'title', 'widget', 'documentFirstHeading')}>
      {children ? children(value) : value}
    </h1>
  ) : (
    ''
  );
