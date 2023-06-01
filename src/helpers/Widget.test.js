import { getWidgetView } from './Widget';

jest.mock('@plone/volto/registry', () => ({
  widgets: {
    views: {
      id: {
        fieldId1: 'Widget1',
        fieldId2: 'Widget2',
      },
      widget: {
        widgetName1: 'Widget3',
        widgetName2: 'Widget4',
      },
      vocabulary: {
        vocabulary1: 'Widget5',
        vocabulary2: 'Widget6',
      },
      choices: 'Widget7',
      type: {
        type1: 'Widget8',
        type2: 'Widget9',
      },
      default: 'Widget10',
    },
  },
  settings: {
    apiPath: '/api',
  },
}));

describe('getWidgetView', () => {
  it('should return the widget component based on field id', () => {
    const props = { id: 'fieldId1' };
    const result = getWidgetView(props);
    expect(result).toBe('Widget1');
  });

  it('should return the widget component based on widget name', () => {
    const props = { widget: 'widgetName2' };
    const result = getWidgetView(props);
    expect(result).toBe('Widget4');
  });

  it('should return the widget component based on choices prop', () => {
    const props = { choices: true };
    const result = getWidgetView(props);
    expect(result).toBe('Widget7');
  });

  it('should return the widget component based on vocabulary prop', () => {
    const props = { vocabulary: { '@id': '/api/@vocabularies/vocabulary2' } };
    const result = getWidgetView(props);
    expect(result).toBe('Widget7');
  });

  it('should return the widget component based on widgetOptions vocabulary hint', () => {
    const props = {
      widgetOptions: {
        vocabulary: { '@id': '/api/@vocabularies/vocabulary1' },
      },
    };
    const result = getWidgetView(props);
    expect(result).toBe('Widget5');
  });

  it('should return the widget component based on type', () => {
    const props = { type: 'type2' };
    const result = getWidgetView(props);
    expect(result).toBe('Widget9');
  });

  it('should return the default widget component', () => {
    const props = {};
    const result = getWidgetView(props);
    expect(result).toBe('Widget10');
  });
});
