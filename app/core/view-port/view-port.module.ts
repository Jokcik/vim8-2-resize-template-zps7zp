import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPortDirective } from './view-port.directive';
import {ViewPortService} from "./view-port.service";

@NgModule({
  declarations: [ViewPortDirective],
  exports: [ViewPortDirective],
  imports: [
    CommonModule
  ]
})
export class ViewPortModule {
  constructor() {
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ViewPortModule,
      providers: [
        ViewPortService
      ]
    };
  }
}
