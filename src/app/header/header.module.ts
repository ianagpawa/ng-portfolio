import { NgModule } from '@angular/core';
import { FaIconModule } from '../fa-icon/fa-icon.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [ HeaderComponent ],
  imports: [ FaIconModule ],
  providers: [],
  bootstrap: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
