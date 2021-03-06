import componentGenerator from './component';
import directiveGenerator from './directive';
import pipeGenerator from './pipe';
import serviceGenerator from './service';
import pageGenerator from './page';
import ngrxGenerator from './ngrx';

module.exports = plop => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('directive', directiveGenerator);
  plop.setGenerator('pipe', pipeGenerator);
  plop.setGenerator('service', serviceGenerator);
  plop.setGenerator('page', pageGenerator);
  plop.setGenerator('ngrx', ngrxGenerator);
};
