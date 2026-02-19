import { Component, Input } from '@angular/core'; // Input берем из core
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model'; // Импортируем твой интерфейс

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  // ПРОВЕРЬ: если файл называется product-card.component.html, пиши полное имя
  templateUrl: './product-card.component.html', 
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product; 
  currentImgIndex: number = 0;

  share(platform: 'wa' | 'tg') {
    const url = platform === 'wa' 
      ? `https://wa.me/?text=${encodeURIComponent('Look! ' + this.product.link)}`
      : `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  changeImage(index: number) {
    this.currentImgIndex = index;
  }
}