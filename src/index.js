import { ArrayWidget } from './components';
import { BooleanWidget } from './components';
import { DatetimeWidget } from './components';
import { DateWidget } from './components';
import { EmailWidget } from './components';
import { getWidgetView } from './helpers';
import { PasswordWidget } from './components';
import { SelectWidget } from './components';
import { TextWidget } from './components';
import { TokenWidget } from './components';
import { UrlWidget } from './components';
import { RichTextWidget } from './components';

const applyConfig = (config) => {
  config.widgets.views = {
    ...config.widgets.views,
    getWidget: getWidgetView,
    default: TextWidget,
    id: {
      subjects: TokenWidget,
    },
    widget: {
      array: ArrayWidget,
      boolean: BooleanWidget,
      choices: SelectWidget,
      date: DateWidget,
      datetime: DatetimeWidget,
      email: EmailWidget,
      password: PasswordWidget,
      richtext: RichTextWidget,
      string: TextWidget,
      tags: TokenWidget,
      textarea: TextWidget,
      url: UrlWidget,
    },
    vocabulary: {},
    choices: SelectWidget,
    type: {
      array: ArrayWidget,
      boolean: BooleanWidget,
    },
  };

  return config;
};

export default applyConfig;
