import { settings, widgets } from '~/config';

/**
 * Get widget by field's `id` attribute
 * @method getWidgetByFieldId
 * @param {string} id Id
 * @returns {string} Widget component.
 */
const getWidgetByFieldId = (id) => widgets.views.id[id] || null;

/**
 * Get widget by field's `widget` attribute
 * @method getWidgetByName
 * @param {string} widget Widget
 * @returns {string} Widget component.
 */
const getWidgetByName = (widget) =>
  typeof widget === 'string'
    ? widgets.views.widget[widget] || getWidgetDefault()
    : null;

/**
 * Get widget by field's `vocabulary` attribute
 * @method getWidgetByVocabulary
 * @param {string} vocabulary Widget
 * @returns {string} Widget component.
 */
const getWidgetByVocabulary = (vocabulary) =>
  vocabulary && vocabulary['@id']
    ? widgets.views.vocabulary[
        vocabulary['@id'].replace(`${settings.apiPath}/@vocabularies/`, '')
      ]
    : null;

/**
 * Get widget by field's hints `vocabulary` attribute in widgetOptions
 * @method getWidgetByVocabularyFromHint
 * @param {string} props Widget props
 * @returns {string} Widget component.
 */
const getWidgetByVocabularyFromHint = (props) =>
  props.widgetOptions && props.widgetOptions.vocabulary
    ? widgets.views.vocabulary[
        props.widgetOptions.vocabulary['@id'].replace(
          `${settings.apiPath}/@vocabularies/`,
          '',
        )
      ]
    : null;

/**
 * Get widget by field's `choices` attribute
 * @method getWidgetByChoices
 * @param {string} choices Widget
 * @returns {string} Widget component.
 */
const getWidgetByChoices = (props) => {
  if (props.choices) {
    return widgets.views.choices;
  }

  if (props.vocabulary) {
    // If vocabulary exists, then it means it's a choice field in disguise with
    // no widget specified that probably contains a string then we force it
    // to be a select widget instead
    return widgets.views.choices;
  }

  return null;
};

/**
 * Get widget by field's `type` attribute
 * @method getWidgetByType
 * @param {string} type Type
 * @returns {string} Widget component.
 */
const getWidgetByType = (type) => widgets.views.type[type] || null;

/**
 * Get default widget
 * @method getWidgetDefault
 * @returns {string} Widget component.
 */
const getWidgetDefault = () => widgets.views.default;

/**
 * Get Widget View
 * @method getWidgetView
 * @param {dict} props Props
 * @returns {string} Widget component.
 */
export const getWidgetView = (props) =>
  getWidgetByFieldId(props.id) ||
  getWidgetByName(props.widget) ||
  getWidgetByChoices(props) ||
  getWidgetByVocabulary(props.vocabulary) ||
  getWidgetByVocabularyFromHint(props) ||
  getWidgetByType(props.type) ||
  getWidgetDefault();
