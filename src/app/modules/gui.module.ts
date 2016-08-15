import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core.module'
import { sharedComponents } from '../components'

@NgModule({
  declarations: [sharedComponents],
  imports: [
    CoreModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    sharedComponents
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GUIModule {
}
