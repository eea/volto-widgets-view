import React from 'react';
import cx from 'classnames';
import { Tags } from '@plone/volto/components';

export const TokenWidget = ({ children, className }) => (
  <div className={cx(className, 'token', 'widget')}>
    <Tags tags={children} />
  </div>
);
