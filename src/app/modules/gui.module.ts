import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from './core.module'
import { components } from '../components'

@NgModule({
  declarations: [components],
  imports: [
    CoreModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    components
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GUIModule {
}
