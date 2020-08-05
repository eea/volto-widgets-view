import React from 'react';
import renderer from 'react-test-renderer';
import { DatetimeWidget } from './DatetimeWidget';

describe('DatetimeWidget', () => {
  it('renders a date view widget component', () => {
    const component = renderer.create(
      <DatetimeWidget className="metadata">2020-08-04T09:00:00</DatetimeWidget>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
