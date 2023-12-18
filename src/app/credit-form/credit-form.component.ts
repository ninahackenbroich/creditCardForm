import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent {
  creditForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    credit: new FormGroup({
      cardNumber: new FormControl(''),
      expiration: new FormControl(''),
      securityCode: new FormControl('')
    })
  });

  onSubmit() {
  }

  constructor() { }

  ngOnInit(): void { }

}
