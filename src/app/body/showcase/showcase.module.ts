import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { FaIconModule } from 'src/app/fa-icon/fa-icon.module';
import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    CarouselModule,
    FaIconModule
  ],
  providers: [],
  bootstrap: [ ShowcaseComponent ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
