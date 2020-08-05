import React from 'react';
import cx from 'classnames';

export const EmailWidget = ({ children, className }) => (
  <a
    href={'mailto:' + children}
    className={cx(className, 'email', 'widget')}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
