import { ArrayWidget } from './components';
import { BooleanWidget } from './components';
import { DatetimeWidget } from './components';
import { DateWidget } from './components';
import { EmailWidget } from './components';
import { FileWidget } from './components';
import { getWidgetView } from './helpers';
import { ImageWidget } from './components';
import { PasswordWidget } from './components';
import { RelationsWidget } from './components';
import { RelationWidget } from './components';
import { RichTextWidget } from './components';
import { SelectWidget } from './components';
import { TextWidget } from './components';
import { TokenWidget } from './components';
import { UrlWidget } from './components';

const applyConfig = (config) => {
  config.widgets.views = {
    ...config.widgets.views,
    getWidget: getWidgetView,
    default: TextWidget,
    id: {
      subjects: TokenWidget,
      relatedItems: RelationsWidget,
      image: ImageWidget,
      file: FileWidget,
    },
    widget: {
      array: ArrayWidget,
      boolean: BooleanWidget,
      choices: SelectWidget,
      date: DateWidget,
      datetime: DatetimeWidget,
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
