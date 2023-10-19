import { NgModule } from '@angular/core';
import { SharedCompComponent } from './shared-comp.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    SharedCompComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    SharedCompComponent,
    ButtonComponent
  ]
})
export class SharedCompModule { }
