import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import {ViewPortModule} from "./core/view-port/view-port.module";
import {IConfig} from "./core/view-port/view-port.directive";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ViewPortModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, TestComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ { provide: 'IConfig', useValue: { large: 1000, medium: 600 } as IConfig } ]
})
export class AppModule { }
