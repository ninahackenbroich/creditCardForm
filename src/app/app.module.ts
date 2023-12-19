import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { InputComponent } from './input/input.component';
import { provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    CardDisplayComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
