import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BodyComponent } from './body.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@NgModule({
  declarations: [
    BodyComponent,
    JumbotronComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BodyComponent],
  exports: [ BodyComponent ]
})
export class BodyModule { }
