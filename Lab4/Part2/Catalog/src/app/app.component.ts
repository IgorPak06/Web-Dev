import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `<h1>Product List</h1><app-products></app-products>`,
  styles: [
    `
    h1 {
      text-align: center
    }
    `
  ]
})
export class AppComponent {}
