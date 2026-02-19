import { Component, signal, computed } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.component.css'
})
export class App {

  categories: Category[];
  selected = signal<number | null>(null);

  products = computed(() => {
    if (this.selected() === null) return [];
    return this.service.getProductsByCategory(this.selected()!);
  });

  constructor(private service: ProductService) {
    this.categories = service.getCategories();
  }

  select(id: number) {
    this.selected.set(id);
  }
}
