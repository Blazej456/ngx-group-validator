import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFormGroupValidatorModule } from 'ngx-form-group-validator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFormGroupValidatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
