import React from 'react';
import cx from 'classnames';

export const RichTextWidget = ({ children, className }) => (
  <div
    className={cx(className, 'richtext', 'widget')}
    dangerouslySetInnerHTML={{ __html: children.data }}
  />
);
