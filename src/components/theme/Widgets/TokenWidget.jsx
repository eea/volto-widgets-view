import React from 'react';
import cx from 'classnames';

export const TokenWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'token', 'widget')}>
      {value.map((tag) => (
        <a className="ui label" href={`/search?Subject=${tag}`} key={tag}>
          {children ? children(tag) : tag}
        </a>
      ))}
    </span>
  ) : (
    ''
  );
