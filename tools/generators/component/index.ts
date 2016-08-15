import { componentExists } from '../utils';

export default {
  description: 'Add a component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'button',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (componentExists(trimmedName) ? 'A component with this name already exists' : true)
          : 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'selector',
      message: 'What should the selector be?',
      default: 'button',
      validate(selector) {
        return selector.trim().length
          ? true
          : 'The selector is required';
      }
    },
    {
      type: 'confirm',
      name: 'wantCSS',
      default: true,
      message: 'Does it have styling?'
    }
  ],
  actions(data) {
    const actions = [
      {
        type: 'add',
        path: '../../src/app/components/{{dashCase name}}/{{dashCase name}}.component.ts',
        templateFile: './component/component.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/components/index.ts',
        pattern: /(\/\/ \$1)/g,
        template: 'import { {{properCase name}}Component } from \'./{{dashCase name}}/{{dashCase name}}.component.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/components/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Component\r\n$1'
      }
    ];

    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: '../../src/app/components/{{dashCase name}}/{{dashCase name}}.component.scss',
        templateFile: './component/stylesheet.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
