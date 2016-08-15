import { directiveExists } from '../utils';

export default {
  description: 'Add a directive',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'tooltip',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (directiveExists(trimmedName) ? 'A directive with this name already exists' : true)
          : 'The name is required';
      }
    },
    {
      type: 'input',
      name: 'selector',
      message: 'What should the selector be?',
      default: '[tooltip]',
      validate(selector) {
        return selector.trim().length
          ? true
          : 'The selector is required';
      }
    }
  ],
  actions(data) {
    return [
      {
        type: 'add',
        path: '../../src/app/directives/{{dashCase name}}.directive.ts',
        templateFile: './directive/directive.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/directives/index.ts',
        pattern: /(\/\/ \$1)/g,
        template: 'import { {{properCase name}}Directive } from \'./{{dashCase name}}.directive.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/directives/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Directive,\r\n$1'
      }
    ];
  }
};
