import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

import { ShowcaseComponent } from './showcase.component';

@NgModule({
  declarations: [
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [ ShowcaseComponent ],
  exports: [ ShowcaseComponent ]
})
export class ShowcaseModule { }
