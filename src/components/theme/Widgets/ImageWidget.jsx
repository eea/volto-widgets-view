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

export const ImageWidget = ({ value, className }) =>
  value ? (
    <span className={cx(className, 'image', 'widget')}>
      <img
        src={flattenToAppURL(value.download)}
        alt={value.file_name || ''}
        data-size={value.size || 0}
        data-size-fmt={niceBytes(value.size || 0)}
        data-content-type={value['content-type'] || ''}
      />
    </span>
  ) : (
    ''
  );
