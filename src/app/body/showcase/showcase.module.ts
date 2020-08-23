import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { FaIconModule } from '../../fa-icon/fa-icon.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CarouselModule,
    BlockUIModule,
    PanelModule,
    FaIconModule
  ],
  providers: [],
  bootstrap: [ ShowcaseComponent ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
