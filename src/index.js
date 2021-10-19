import { ArrayWidget } from '@eeacms/volto-widgets-view/components';
import { BooleanWidget } from '@eeacms/volto-widgets-view/components';
import { DatetimeWidget } from '@eeacms/volto-widgets-view/components';
import { DateWidget } from '@eeacms/volto-widgets-view/components';
import { DescriptionWidget } from '@eeacms/volto-widgets-view/components';
import { EmailWidget } from '@eeacms/volto-widgets-view/components';
import { FileWidget } from '@eeacms/volto-widgets-view/components';
import { getWidgetView } from '@eeacms/volto-widgets-view/helpers';
import { ImageWidget } from '@eeacms/volto-widgets-view/components';
import { PasswordWidget } from '@eeacms/volto-widgets-view/components';
import { RelationsWidget } from '@eeacms/volto-widgets-view/components';
import { RelationWidget } from '@eeacms/volto-widgets-view/components';
import { RichTextWidget } from '@eeacms/volto-widgets-view/components';
import { SelectWidget } from '@eeacms/volto-widgets-view/components';
import { TextWidget } from '@eeacms/volto-widgets-view/components';
import { TitleWidget } from '@eeacms/volto-widgets-view/components';
import { TokenWidget } from '@eeacms/volto-widgets-view/components';
import { UrlWidget } from '@eeacms/volto-widgets-view/components';

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
