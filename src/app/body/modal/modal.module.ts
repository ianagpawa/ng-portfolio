import { NgModule } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
import { FaIconModule } from '../../fa-icon/fa-icon.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    FaIconModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [ModalComponent],
  exports: [ ModalComponent ]
})
export class ModalModule { }
