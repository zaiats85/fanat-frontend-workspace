import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperComponent } from './developer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DeveloperComponent
  ],
  declarations: [
    DeveloperComponent
  ],
  providers: []
})
export class DeveloperModule {
}
