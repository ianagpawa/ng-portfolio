import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    DialogModule,
  ],
  providers: [],
  bootstrap: [ModalComponent],
  exports: [ ModalComponent ]
})
export class ModalModule { }
