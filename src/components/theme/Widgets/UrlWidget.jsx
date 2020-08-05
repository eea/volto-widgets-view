import React from 'react';
import cx from 'classnames';

export const UrlWidget = ({ children, className }) => (
  <a
    href={children}
    className={cx(className, 'url', 'widget')}
    rel="noreferrer"
    target="_blank"
  >
    {children}
  </a>
);
