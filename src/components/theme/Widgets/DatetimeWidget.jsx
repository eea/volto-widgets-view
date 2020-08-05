import React from 'react';
import cx from 'classnames';
import moment from 'moment';

// import 'moment/locale/en-gb';
// import { useIntl } from 'react-intl';

export const DatetimeWidget = ({ children, className }) => {
  // const intl = useIntl();
  // moment.locale(intl.locale);
  const datetime = moment(children).format('lll');
  return (
    <span className={cx(className, 'datetime', 'widget')}>{datetime}</span>
  );
};
