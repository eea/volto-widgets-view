import React from 'react';
import cx from 'classnames';

export const TokenWidget = ({ children, className }) => (
  <span className={cx(className, 'token', 'widget')}>
    {children
      ? children.map((tag) => (
          <a className="ui label" href={`/search?Subject=${tag}`} key={tag}>
            {tag}
          </a>
        ))
      : ''}
  </span>
);
