import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { FaIconComponent } from './fa-icon.component';

@NgModule({
  declarations: [
    FaIconComponent,
  ],
  imports: [
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ FaIconComponent ],
  exports: [ FaIconComponent ]
})
export class FaIconModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }
}
