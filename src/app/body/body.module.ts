import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [
    BodyComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    ShowcaseModule
  ],
  providers: [],
  bootstrap: [BodyComponent],
  exports: [ BodyComponent ]
})
export class BodyModule { }
