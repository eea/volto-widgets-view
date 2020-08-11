import React from 'react';
import cx from 'classnames';

export const RichTextWidget = ({ value, className }) =>
  value ? (
    <p
      className={cx(className, 'richtext', 'widget')}
      dangerouslySetInnerHTML={{
        __html: value.data,
      }}
    />
  ) : (
    ''
  );
