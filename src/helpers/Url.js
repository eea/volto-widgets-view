import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

/**
 * Get url
 * @method getURL
 * @param {object} data
 * @returns {string} URL string value.
 */
export const getURL = (data) => {
  let url = data;
  if (isObject(data) && !isArray(data) && data['@type'] === 'URL') {
    url = data['value'] || data['url'] || data['href'] || '';
  }
  if (isString(url) && isInternalURL(url)) return flattenToAppURL(url);
  return url;
};
