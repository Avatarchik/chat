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
      // Interface
      {
        type: 'add',
        path: '../../src/app/interfaces/{{dashCase name}}.interface.ts',
        templateFile: './ngrx/interface.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/interfaces/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}} } from \'./{{dashCase name}}.interface.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/interfaces/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}},\r\n$1'
      },

      // Actions
      {
        type: 'add',
        path: '../../src/app/actions/{{dashCase name}}.action.ts',
        templateFile: './ngrx/action.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/actions/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Actions } from \'./{{dashCase name}}.action.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/actions/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Actions,\r\n$1'
      },

      // Reducers
      {
        type: 'add',
        path: '../../src/app/reducers/{{dashCase name}}.reducer.ts',
        templateFile: './ngrx/reducer.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/reducers/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{camelCase name}}Reducer } from \'./{{dashCase name}}.reducer.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/reducers/index.ts',
        pattern: /(\/\/ \$2)/gi,
        template: '{{camelCase name}}Reducer,\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/reducers/index.ts',
        pattern: /(\/\/ \$3)/gi,
        template: '{{camelCase name}}s: {{camelCase name}}Reducer,\r\n$1'
      },

      // Selectors
      {
        type: 'add',
        path: '../../src/app/selectors/{{dashCase name}}.selector.ts',
        templateFile: './ngrx/selector.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/selectors/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Selectors } from \'./{{dashCase name}}.selector.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/selectors/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Selectors,\r\n$1'
      },

      // Service
      {
        type: 'add',
        path: '../../src/app/services/{{dashCase name}}.service.ts',
        templateFile: './ngrx/service.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/services/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Service } from \'./{{dashCase name}}.service\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/services/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Service,\r\n$1'
      },

      // Effects
      {
        type: 'add',
        path: '../../src/app/effects/{{dashCase name}}.effect.ts',
        templateFile: './ngrx/effect.hbs',
        abortOnFail: true
      },
      {
        type: 'modify',
        path: '../../src/app/effects/index.ts',
        pattern: /(\/\/ \$1)/gi,
        template: 'import { {{properCase name}}Effects } from \'./{{dashCase name}}.effect.ts\';\r\n$1'
      },
      {
        type: 'modify',
        path: '../../src/app/effects/index.ts',
        pattern: /(\/\/ \$[2-3])/gi,
        template: '{{properCase name}}Effects,\r\n$1'
      }
    ];
  }
};
