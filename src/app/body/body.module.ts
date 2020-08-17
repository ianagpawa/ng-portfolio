import { NgModule } from '@angular/core';

import { BodyComponent } from './body.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ShowcaseModule } from './showcase/showcase.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    BodyComponent,
    JumbotronComponent,
  ],
  imports: [
    ShowcaseModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [ BodyComponent ],
  exports: [ BodyComponent ]
})
export class BodyModule { }
