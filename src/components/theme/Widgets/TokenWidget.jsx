import React from 'react';
import cx from 'classnames';
import { Tags } from '@plone/volto/components';

export const TokenWidget = ( { data, schema, className } ) => (
    <div className={cx(className, 'token', 'widget', schema?.id)}>
        <Tags tags={data} />
    </div>
);
