import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { _404PageRoutes } from '../routes';
import { _404Page} from '../pages';

@NgModule({
  declarations: [_404Page],
  imports: [
    CommonModule,
    _404PageRoutes,
  ]
})
export class _404PageModule {
}
