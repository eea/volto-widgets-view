# volto-widgets-view

Add View components for Volto Widgets

## Develop

Before starting make sure your development environment is properly set. See [Volto Developer Documentation](https://docs.voltocms.com/getting-started/install/)

1.  Install `mrs.developer`

        $ npm install -g mrs.developer

1.  Install `@plone/create-volto-app`

        $ npm install -g @plone/create-volto-app

1.  Create new volto app

        $ create-volto-app my-volto-project
        $ cd my-volto-project

1.  Update `package.json` with the following information:

        {
            "scripts": {
                "develop": "missdev --config=jsconfig.json --output=addons"
            },

            "addons": [
                "@eeacms/volto-widgets-view"
            ],

            "dependencies": {
                "@plone/volto": "8.0.0"
            }
        }

1.  Add the following to `mrs.developer.json`:

        {
            "volto-widgets-view": {
                "url": "https://github.com/eea/volto-widgets-view.git",
                "package": "@eeacms/volto-widgets-view",
                "branch": "develop",
                "path": "src"
            }
        }

1.  Install

        $ yarn develop
        $ yarn

1.  Start backend

        $ docker run -d --name plone -p 8080:8080 -e SITE=Plone plone

    ...wait for backend to setup and start - `Ready to handle requests`:

        $ docker logs -f plone

    ...you can also check http://localhost:8080/Plone

1.  Start frontend

        $ yarn start

1.  Go to http://localhost:3000

1.  Happy hacking!

        $ cd src/addons/volto-widgets-view/