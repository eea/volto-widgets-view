import {
  ArrayWidget,
  BooleanWidget,
  DatetimeWidget,
  DateWidget,
  DescriptionWidget,
  EmailWidget,
  FileWidget,
  ImageWidget,
  PasswordWidget,
  RelationsWidget,
  RelationWidget,
  RichTextWidget,
  SelectWidget,
  TextWidget,
  TitleWidget,
  TokenWidget,
  UrlWidget,
} from '@eeacms/volto-widgets-view/components';
import { getWidgetView } from '@eeacms/volto-widgets-view/helpers';

const applyConfig = (config) => {
  config.widgets.views = {
    getWidget: getWidgetView,
    default: TextWidget,
    id: {
      file: FileWidget,
      image: ImageWidget,
      relatedItems: RelationsWidget,
      subjects: TokenWidget,
      ...(config.widgets.views?.id || {}),
    },
    widget: {
      array: ArrayWidget,
      boolean: BooleanWidget,
      choices: SelectWidget,
      date: DateWidget,
      datetime: DatetimeWidget,
      description: DescriptionWidget,
      email: EmailWidget,
      file: FileWidget,
      image: ImageWidget,
      password: PasswordWidget,
      relation: RelationWidget,
      relations: RelationsWidget,
      richtext: RichTextWidget,
      string: TextWidget,
      tags: TokenWidget,
      textarea: TextWidget,
      title: TitleWidget,
      url: UrlWidget,
      ...(config.widgets.views?.widget || {}),
    },
    vocabulary: {},
    choices: SelectWidget,
    type: {
      array: ArrayWidget,
      boolean: BooleanWidget,
      ...(config.widgets.views?.type || {}),
    },
  };

  // moment date locale. See https://momentjs.com/ - Multiple Locale Support
  config.settings.dateLocale = config.settings.dateLocale || 'en';

  return config;
};

export default applyConfig;
