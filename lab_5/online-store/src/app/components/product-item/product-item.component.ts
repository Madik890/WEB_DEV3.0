import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],   // 👈 ВАЖНО
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})

export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  like() {
    // likes is inside object; Angular will update UI because click triggers change detection
    this.product().likes += 1;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  shareWhatsApp() {
    const p = this.product();
    const text = encodeURIComponent(`${p.name}\n${p.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const p = this.product();
    const url = encodeURIComponent(p.link);
    const text = encodeURIComponent(p.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
