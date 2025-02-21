import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product; 
  @Output() remove = new EventEmitter<string>();
  
  encodeLink(link: string): string {
    return encodeURIComponent(link);
  }
  likeCount = 0;

  likeProduct() {
    this.likeCount++;
  }

  removeItem() {
    if (this.product && this.product.name) {
      this.remove.emit(this.product.name);
    }
  }
}
