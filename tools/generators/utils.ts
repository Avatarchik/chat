import * as fs from 'fs';

export function componentExists(component) {
  return fs
      .readdirSync('src/app/components')
      .indexOf(component.toLowerCase()) >= 0;
}

export function directiveExists(directive) {
  return fs
      .readdirSync('src/app/directives')
      .indexOf(directive.toLowerCase()) >= 0;
}

export function pipeExists(pipe) {
  return fs
    .readdirSync('src/app/pipes')
    .some(fileName => fileName.indexOf(pipe.toLowerCase()) >= 0);
}

export function serviceExists(service) {
  return fs
    .readdirSync('src/app/services')
    .some(fileName => fileName.indexOf(service.toLowerCase()) >= 0);
}

export function pageExists(entity) {
  const modules = fs
    .readdirSync('src/app/modules')
    .filter(f => f !== 'index.ts' && f.endsWith('-page.module.ts'))
    .map(f => f.slice(0, -15));

  const pages = fs
    .readdirSync('src/app/pages')
    .filter(f => f !== 'index.ts');

  const routes = fs
    .readdirSync('src/app/routes')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -15));

  return [...modules, ...pages, ...routes]
    .some(fileName => fileName.indexOf(entity.toLowerCase()) >= 0);
}

export function entityExists(entity) {
  const interfaces = fs
    .readdirSync('src/app/interfaces')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -13));

  const actions = fs
    .readdirSync('src/app/actions')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -10));

  const reducers = fs
    .readdirSync('src/app/reducers')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -11));

  const effects = fs
    .readdirSync('src/app/selectors')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -10));

  const selectors = fs
    .readdirSync('src/app/selectors')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -12));

  const services = fs
    .readdirSync('src/app/services')
    .filter(f => f !== 'index.ts')
    .map(f => f.slice(0, -11));

  return [...interfaces, ...actions, ...reducers, ...effects, ...selectors, ...services]
    .some(fileName => fileName.indexOf(entity.toLowerCase()) >= 0);
}
