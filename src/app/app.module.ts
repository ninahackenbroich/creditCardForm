import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { InputComponent } from './input/input.component';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};
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
  providers: [
    provideEnvironmentNgxMask(maskConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
