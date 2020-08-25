import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { BlockUIModule } from 'primeng/blockui';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { FaIconModule } from '../../fa-icon/fa-icon.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CarouselModule,
    BlockUIModule,
    TooltipModule,
    PanelModule,
    FaIconModule
  ],
  providers: [],
  bootstrap: [ ShowcaseComponent ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
