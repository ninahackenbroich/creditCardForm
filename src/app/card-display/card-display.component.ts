import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent {
  @Input() name: string | null = '';
  @Input() cardNumber: string | null = '';
  @Input() expiration: string | null = '';
  @Input() securityCode: string | null = '';

  constructor() { }

  ngOnInit(): void { }

}
