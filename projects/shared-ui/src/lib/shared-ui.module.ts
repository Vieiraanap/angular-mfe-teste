import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { ButtonComponent } from '../public-api';



@NgModule({
  declarations: [
    SharedUiComponent,
    // ButtonComponent
  ],
  imports: [
  ],
  exports: [
    SharedUiComponent,
    // ButtonComponent
  ]
})
export class SharedUiModule { }
