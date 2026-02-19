import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // Exactly 4 categories
  private readonly categoriesData: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  // Exactly 20 products (5 per category)
  // NOTE: image can be any valid URL. If you want kaspi images: open product page → copy image address.
  private readonly productsData: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 101,
      categoryId: 1,
      name: 'Apple iPhone 15 Pro Max 256Gb (серый)',
      description: 'Флагман Apple: мощный чип, отличная камера, премиальные материалы.',
      price: 699990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/',
      image: 'https://via.placeholder.com/320x220?text=iPhone+15+Pro+Max',
      likes: 0,
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra 5G 12/256 (черный)',
      description: 'Топовый Android-флагман: S Pen, мощная камера, AMOLED 120Hz.',
      price: 649990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/',
      image: 'https://via.placeholder.com/320x220?text=Galaxy+S24+Ultra',
      likes: 0,
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Xiaomi 14 12/512 (черный)',
      description: 'Компактный флагман: мощный чип, быстрый экран, хорошие камеры.',
      price: 429990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/xiaomi-14-12-gb-512-gb-chernyi-117244078/',
      image: 'https://via.placeholder.com/320x220?text=Xiaomi+14',
      likes: 0,
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Samsung Galaxy A55 5G 8/256 (желтый)',
      description: 'Середняк с хорошим экраном и защитой: отличный вариант “цена/качество”.',
      price: 219990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-zheltyi-117465094/',
      image: 'https://via.placeholder.com/320x220?text=Galaxy+A55',
      likes: 0,
    },
    {
      id: 105,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13 Pro 4G NFC 8/256 (черный)',
      description: 'Популярная серия Redmi: AMOLED 120Hz, большой экран, NFC.',
      price: 149990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-nfc-8-gb-256-gb-chernyi-115994614/',
      image: 'https://via.placeholder.com/320x220?text=Redmi+Note+13+Pro',
      likes: 0,
    },

    // Laptops (categoryId: 2)
    {
      id: 201,
      categoryId: 2,
      name: 'Apple MacBook Air 15 (2023) 8/256',
      description: 'Большой Air: лёгкий, быстрый, отличный экран, долго держит батарею.',
      price: 699990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-15-3-8-gb-ssd-256-gb-macos-mqkp3ru-a-111217765/',
      image: 'https://via.placeholder.com/320x220?text=MacBook+Air+15',
      likes: 0,
    },
    {
      id: 202,
      categoryId: 2,
      name: 'Apple MacBook Air 13 (2022) 8/256',
      description: 'Классика для учебы и работы: тихий, быстрый, супер автономность.',
      price: 549990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/',
      image: 'https://via.placeholder.com/320x220?text=MacBook+Air+13',
      likes: 0,
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Lenovo ThinkPad E14 Gen 6 14" 16/512',
      description: 'ThinkPad: надежность, клавиатура топ, подходит для учебы/офиса.',
      price: 429990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-e14-gen-6-14-16-gb-ssd-512-gb-win-11-pro-0197530290664-137864713/',
      image: 'https://via.placeholder.com/320x220?text=ThinkPad+E14',
      likes: 0,
    },
    {
      id: 204,
      categoryId: 2,
      name: 'ASUS TUF Gaming F15 15.6" 16/512',
      description: 'Игровой ноут: хороший вариант под игры и тяжёлые задачи.',
      price: 499990,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-16-gb-ssd-512-gb-dos-fx506h-90nr0723-m05380-102216407/',
      image: 'https://via.placeholder.com/320x220?text=ASUS+TUF+F15',
      likes: 0,
    },
    {
      id: 205,
      categoryId: 2,
      name: 'Acer Aspire 5 15.6" 16/512 (без ОС)',
      description: 'Универсальный ноут для работы/учебы: SSD, 16GB RAM.',
      price: 299990,
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-15-6-16-gb-ssd-512-gb-bez-os-a515-57g-nx-knzer-001-113816470/',
      image: 'https://via.placeholder.com/320x220?text=Acer+Aspire+5',
      likes: 0,
    },

    // Headphones (categoryId: 3)
    {
      id: 301,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (черный)',
      description: 'Один из лучших ANC: комфорт + отличный звук.',
      price: 199990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
      image: 'https://via.placeholder.com/320x220?text=Sony+WH-1000XM5',
      likes: 0,
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (серебристый)',
      description: 'Та же легенда по шумодаву — другой цвет.',
      price: 199990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-serebristyi-105577599/',
      image: 'https://via.placeholder.com/320x220?text=Sony+XM5+Silver',
      likes: 0,
    },
    {
      id: 303,
      categoryId: 3,
      name: 'Sony WH-1000XM5 (синий)',
      description: 'Комфорт, ANC, автономность — топ.',
      price: 199990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-sinii-110881373/',
      image: 'https://via.placeholder.com/320x220?text=Sony+XM5+Blue',
      likes: 0,
    },
    {
      id: 304,
      categoryId: 3,
      name: 'Apple AirPods Pro 2nd gen (белый)',
      description: 'Удобные TWS с шумоподавлением и прозрачным режимом.',
      price: 119990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
      image: 'https://via.placeholder.com/320x220?text=AirPods+Pro+2',
      likes: 0,
    },
    {
      id: 305,
      categoryId: 3,
      name: 'JBL Tune 770NC (черный)',
      description: 'Доступные полноразмерные с ANC.',
      price: 49990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/',
      image: 'https://via.placeholder.com/320x220?text=JBL+Tune+770NC',
      likes: 0,
    },

    // Tablets (categoryId: 4)
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad Air 10.9 (2022) Wi-Fi 8/64',
      description: 'Лёгкий планшет для учебы/рисования/контента.',
      price: 329990,
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-10-9-2022-wi-fi-10-9-djuim-8-gb-64-gb-svetlo-bezhevyi-104235603/',
      image: 'https://via.placeholder.com/320x220?text=iPad+Air+2022',
      likes: 0,
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Apple iPad Air (2024) 11 Wi-Fi+5G 8/256',
      description: 'Новый Air: мощный, быстрый, отличный экран.',
      price: 799990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-5g-11-11-djuim-8-gb-256-gb-goluboi-120606300/',
      image: 'https://via.placeholder.com/320x220?text=iPad+Air+2024',
      likes: 0,
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 11 12/256 (бежевый)',
      description: 'AMOLED, мощный, удобен для мультимедиа и заметок.',
      price: 449990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzeeskz-11-djuim-12-gb-256-gb-bezhevyi-112504503/',
      image: 'https://via.placeholder.com/320x220?text=Galaxy+Tab+S9',
      likes: 0,
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Xiaomi Pad 6 11 8/256 (серый)',
      description: 'Отличный “цена/качество”: большой экран и норм производительность.',
      price: 179990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/',
      image: 'https://via.placeholder.com/320x220?text=Xiaomi+Pad+6',
      likes: 0,
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Apple iPad 10.9 (2022) Wi-Fi 4/64 (серебристый)',
      description: 'База iPad: подходит для учебы, конспектов, видео.',
      price: 269990,
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/',
      image: 'https://via.placeholder.com/320x220?text=iPad+10.9+2022',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return this.categoriesData;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsData.filter(p => p.categoryId === categoryId);
  }
}
