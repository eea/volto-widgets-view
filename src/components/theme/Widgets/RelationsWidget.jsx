import React from 'react';
import cx from 'classnames';
import { RelationWidget } from '@eeacms/volto-widgets-view/components/theme/Widgets/RelationWidget';

export const RelationsWidget = ({ value, children, className }) =>
  value ? (
    <span className={cx(className, 'relations', 'widget')}>
      {value.map((item) => (
        <RelationWidget
          value={item}
          className={className}
          key={item.token || item.title || item}
        >
          {children}
        </RelationWidget>
      ))}
    </span>
  ) : (
    ''
  );
