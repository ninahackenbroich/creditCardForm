import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from "../date-form-control";

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent {

  creditForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  });

  onSubmit() {
    console.log(this.creditForm.value);
  }

  onReset() {
    this.creditForm.reset();
  }

  constructor() { }

  ngOnInit(): void { }

}
