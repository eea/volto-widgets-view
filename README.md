# volto-widgets-view

[![Releases](https://img.shields.io/github/v/release/eea/volto-widgets-view)](https://github.com/eea/volto-widgets-view/releases)

Add View components for [Volto](https://github.com/plone/volto#volto) Widgets

## Widgets

* [ArrayWidget](src/components/theme/Widgets/ArrayWidget.jsx)
* [BooleanWidget](src/components/theme/Widgets/BooleanWidget.jsx)
* [DatetimeWidget](src/components/theme/Widgets/DatetimeWidget.jsx)
* [DateWidget](src/components/theme/Widgets/DateWidget.jsx)
* [DescriptionWidget](src/components/theme/Widgets/DescriptionWidget.jsx)
* [EmailWidget](src/components/theme/Widgets/EmailWidget.jsx)
* [FileWidget](src/components/theme/Widgets/FileWidget.jsx)
* [ImageWidget](src/components/theme/Widgets/ImageWidget.jsx)
* [PasswordWidget](src/components/theme/Widgets/PasswordWidget.jsx)
* [RelationsWidget](src/components/theme/Widgets/RelationsWidget.jsx)
* [RelationWidget](src/components/theme/Widgets/RelationWidget.jsx)
* [RichTextWidget](src/components/theme/Widgets/RichTextWidget.jsx)
* [SelectWidget](src/components/theme/Widgets/SelectWidget.jsx)
* [TextWidget](src/components/theme/Widgets/TextWidget.jsx)
* [TitleWidget](src/components/theme/Widgets/TitleWidget.jsx)
* [TokenWidget](src/components/theme/Widgets/TokenWidget.jsx)
* [UrlWidget](src/components/theme/Widgets/UrlWidget.jsx)

## Usage

This package registers the above widgets within global `~/config` at `config.widgets.views`

For usage examples see:

* [volto-metadata-block](https://github.com/eea/volto-metadata-block)
* [volto-slate-metadata-mentions](https://github.com/eea/volto-slate-metadata-mentions)

## Getting started

1. Create new volto project if you don't already have one:
    ```
    $ npm install -g @plone/create-volto-app
    $ create-volto-app my-volto-project
    $ cd my-volto-project
    ```

1. Update `package.json`:
    ``` JSON
    "addons": [
        "@eeacms/volto-widgets-view",
    ],

    "dependencies": {
        "@plone/volto": "8.0.0",
        "@eeacms/volto-widgets-view": "1.0.0"
    }
    ```

1. Install new add-ons and restart Volto:
    ```
    $ yarn
    $ yarn start
    ```

1. Go to http://localhost:3000

1. Happy editing!


## How to contribute

See [DEVELOP.md](DEVELOP.md).


## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
