import React from 'react';
import cx from 'classnames';
import { settings } from '~/config';

export const RelationWidget = ({ value, children, className }) => {
  if (!value) {
    return '';
  }

  const url = (value['@id'] || '#').replace(settings.apiPath, '');
  const state = value.review_state || '';
  const description = value.description || '';
  const type = value['@type'] || '';

  return (
    <a
      href={url}
      className={cx(className, 'relation', 'widget', type, state)}
      title={description}
    >
      {children
        ? children(value?.title || value?.token || value)
        : value?.title || value?.token || value}
    </a>
  );
};
