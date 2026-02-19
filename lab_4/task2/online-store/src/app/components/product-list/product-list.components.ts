// БЫЛО: import { Component } from '@angular/common';
import { Component } from '@angular/core'; // СТАЛО
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Импортируем модуль для *ngFor и дочерний компонент
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Новый iPhone 15 с инновационным дизайном и мощным процессором A16 Bionic.',
      price: 365000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/83559338246174.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/83559338246174.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h71/h05/83559338311710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h09/h10/83559338377246.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 Ultra 12Gb/256Gb серый',
      description: 'Флагман с поддержкой Galaxy AI и встроенным пером S Pen.',
      price: 520000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84958145019934.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84958145019934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h4e/84958145151006.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h2e/ha6/84958145216542.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2 с MagSafe Case (USB-C)',
      description: 'Активное шумоподавление и адаптивный звук для полного погружения.',
      price: 115000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401510942.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/83819401510942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/h80/83819401576478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h5b/83819401642014.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-magsafe-case-usb-c-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Более компактная версия PS5 с накопителем 1 ТБ и графикой 4K.',
      price: 245000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/84478174527518.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h9a/84478174527518.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h00/h25/84478174593054.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h61/h67/84478174658590.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696085/'
    },
    {
      id: 5,
      name: 'Ноутбук Apple MacBook Air 13 2022 M2 8 ГБ/256 ГБ серый',
      description: 'Тонкий и мощный ноутбук на базе чипа Apple M2 с Liquid Retina дисплеем.',
      price: 460000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h11/64510006329374.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/h11/64510006329374.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h28/64510010064926.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/hb4/64510013800478.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-105933794/'
    },
    {
      id: 6,
      name: 'Стайлер Dyson Airwrap Multi-styler Complete Long',
      description: 'Универсальный прибор для завивки, создания волн и разглаживания волос без перегрева.',
      price: 285000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h54/85934145765406.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h54/85934145765406.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h80/85934145830942.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/h9f/85934145896478.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/stailer-dyson-airwrap-multi-styler-complete-long-nikel-mednyi-105151528/'
    },
    {
      id: 7,
      name: 'Смарт-браслет Xiaomi Mi Band 8 черный',
      description: 'Фитнес-трекер с ярким AMOLED экраном и поддержкой более 150 спортивных режимов.',
      price: 18000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h79/80860002025502.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/h79/80860002025502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h98/80860002091038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h6b/80860002156574.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-smart-band-8-chernyi-110191141/'
    },
    {
      id: 8,
      name: 'Колонка Marshall Emberton II черный',
      description: 'Портативная колонка с фирменным звуком Marshall и защитой IP67.',
      price: 85000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/64386927951902.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h99/64386927951902.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h30/64386930016286.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h37/64386932408350.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/marshall-emberton-ii-chernyi-latunnyi-105027582/'
    },
    {
      id: 9,
      name: 'Кофемашина DeLonghi Magnifica Start ECAM220.22.GB',
      description: 'Автоматическая кофемашина для приготовления идеального эспрессо и капучино.',
      price: 215000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h5a/66521743622174.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h5a/66521743622174.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/ha6/hd0/66521746604062.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hba/hc9/66521749585950.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-start-ecam220-22-gb-seryi-107771765/'
    },
    {
      id: 10,
      name: 'Электросамокат Xiaomi Electric Scooter 4 Pro (2nd Gen)',
      description: 'Мощный электросамокат с запасом хода до 60 км и улучшенной системой безопасности.',
      price: 260000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/hb9/86178306359326.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hb9/86178306359326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/hd8/86178306424862.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h99/86178306490398.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-electric-scooter-4-pro-2nd-gen-chernyi-119864239/'
    }
  ];
}