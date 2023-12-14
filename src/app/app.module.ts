import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { CardDisplayComponent } from './card-display/card-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditFormComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
