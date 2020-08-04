import React from 'react';
import cx from 'classnames';

export const TextWidget = ( { data, schema, className } ) => (
    <span className={cx(className, 'text', 'widget', schema?.id)}>{data}</span>
);
