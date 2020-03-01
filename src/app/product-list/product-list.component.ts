import { Component } from '@angular/core';
import { products } from '../../const/products'

interface product {
  name: string,
  price: number,
  description?: string
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products

  share(product: product) {
    window.alert(`product ${product.name} has been shared~`)
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
