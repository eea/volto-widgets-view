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
      datetime: DatetimeWidget,
      date: DateWidget,
      password: PasswordWidget,
      richtext: RichTextWidget,
      email: EmailWidget,
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
