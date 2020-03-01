import { Component, OnInit } from '@angular/core';
import { shippingCosts } from '../../const/shipping'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts
  constructor() { }

  ngOnInit() {
    this.shippingCosts = shippingCosts
  }

}
