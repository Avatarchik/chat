import { pageExists } from '../utils';

export default {
  description: 'Add a route',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'about',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (pageExists(name) ? 'A page with this name already exists' : true)
          : 'The page is required';
      }
    },
    {
      type: 'input',
      name: 'selector',
      message: 'What should the selector be?',
      default: 'about-page',
      validate(selector) {
        return selector.trim().length
          ? (selector.trim().endsWith('-page') ? true : 'selector must end with -page')
          : 'The selector is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?'
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter the path of the route.',
      default: 'about',
      validate(path) {
        return path.trim().length
          ? (path.trim().startsWith('/') ? 'path cannot start with /' : true)
          : 'path is required';
      }
    }
  ],

  actions(data) {
    const actions = [
      {
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.page.ts',
        templateFile: './page/page-component.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/pages/index.ts',
        pattern: /(\/\/ \$1)/g,
        template: 'import { {{properCase name}}Page } from \'./{{dashCase name}}/{{dashCase name}}.page.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/pages/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Page,\r\n$1'
      },

      {
        type: 'add',
        path: '../../src/app/routes/{{dashCase name}}-page.routes.ts',
        templateFile: './page/page-route.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/routes/index.ts',
        pattern: /(\/\/ \$1)/g,
        template: 'import { {{camelCase name}}PageRoutes } from \'./{{dashCase name}}-page.routes.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/routes/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{camelCase name}}PageRoutes,\r\n$1'
      },

      {
        type: 'modify',
        path: '../../src/app/app.routes.ts',
        pattern: /(\/\/ \$1)/g, // /(\s{\n\s{4}path: '\*\*',)/g,
        templateFile: './page/app-route.hbs'
      },

      {
        type: 'add',
        path: '../../src/app/modules/{{dashCase name}}-page.module.ts',
        templateFile: './page/page-module.hbs',
        abortOnFail: true
      }
    ];

    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../../src/app/pages/{{dashCase name}}/{{dashCase name}}.page.scss',
        templateFile: './page/page-component-stylesheet.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
