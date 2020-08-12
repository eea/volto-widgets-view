import React from 'react';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers';

const niceBytes = (bytes) => {
  bytes = Number(bytes);

  const divider = 1000;
  const magnitude = (Math.log(bytes) / Math.log(divider)) | 0;
  const result = bytes / Math.pow(divider, magnitude);
  const fixed = result.toFixed(2);

  const suffix = magnitude ? 'kMGTPEZY'[magnitude - 1] + 'B' : 'B';

  return fixed + suffix;
};

export const FileWidget = ({ value, children, className }) => {
  if (!value) {
    return '';
  }

  const url = flattenToAppURL(value.download || value.filename || value);
  const filename = value.filename || url;
  const size = value.size || 0;
  const ctype = value['content-type'] || '';
  return (
    <a
      title={ctype || filename}
      href={url}
      className={cx(className, 'file', 'widget')}
      data-size={size}
      data-size-fmt={niceBytes(size)}
      data-content-type={ctype}
    >
      {children ? children(filename) : filename}
    </a>
  );
};
