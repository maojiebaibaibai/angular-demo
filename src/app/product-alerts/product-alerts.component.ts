import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

interface product {
  name: string,
  price: number,
  description?: string
}

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
