import { Component, OnChanges, signal, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnChanges {
  products = input.required<Product[]>(); // input from AppComponent
  list = signal<Product[]>([]); // local copy so we can delete items

  ngOnChanges(): void {
    this.list.set([...this.products()]);
  }

  onDelete(productId: number) {
    this.list.set(this.list().filter(p => p.id !== productId));
  }
}
