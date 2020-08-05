import React from 'react';
import cx from 'classnames';
import moment from 'moment';

// import 'moment/locale/en-gb';
// import { useIntl } from 'react-intl';

export const DateWidget = ({ children, className }) => (
  // const intl = useIntl();
  // moment.locale(intl.locale);
  <span className={cx(className, 'date', 'widget')}>
    {moment(children).format('ll')}
  </span>
);
