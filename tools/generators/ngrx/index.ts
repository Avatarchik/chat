import { entityExists } from '../utils';

export default {
  description: 'Create interface, action, reducer, effect, selector for ngrx.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your entity?',
      default: 'todo',
      validate(name) {
        const trimmedName = name.trim();

        return trimmedName.length
          ? (entityExists(trimmedName) ? 'The entity name already exists' : true)
          : 'The name is required';
      }
    }
  ],
  actions(data) {
    return [
      {
        type: 'modify',
        path: '../../src/app/modules/data.module.ts',
        pattern: /(\/\* \$1 \*\/)/gi,
        template: '{{properCase name}}Service, $1'
      },
      {
        type: 'modify',
        path: '../../src/app/modules/data.module.ts',
        pattern: /(\/\* \$2 \*\/)/gi,
        template: '{{properCase name}}Actions, $1'
      },
      {
        type: 'modify',
        path: '../../src/app/modules/data.module.ts',
        pattern: /(\/\/ \$3)/gi,
        template: '{{properCase name}}Service, \r\n {{properCase name}}Actions, \r\n$1'
      },
    ];
  }
};
