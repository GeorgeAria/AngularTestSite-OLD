//FormsModule is imported so that the "ngModule" Angular directive can be used
//CommonModule is needed in every feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],

  //The "exports" array allows other modules to use this module's components when those modules import this module.
  //System Angular modules can also be exported, like CommonModule and FormsModule.
  //NOTE: Only export thing if another Angular module needs it.
  //Also, never export a service (since it doesn't make sense given how they work).

  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
