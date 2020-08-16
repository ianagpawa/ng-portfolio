import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyModule } from './body/body.module';
import { FaIconModule } from './fa-icon/fa-icon.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BodyModule,
    FaIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
