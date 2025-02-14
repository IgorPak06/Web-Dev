import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./products.component.html`,
  styles: [
    `.
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    * {
        font-family: 'Roboto', sans-serif;
      }
    
    .product-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 20px;
      align-items: stretch;
    }

    .product-card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 10px;
      max-width: 300px;
      flex: 1 1 calc(33.333% - 40px);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      min-height: 500px;
    }

    .product-image {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }

    .product-card h2,
    .product-card p {
      text-align: center;
      flex-grow: 1;
    }

    .share-buttons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: auto;
    }

    .share-buttons a {
      text-decoration: none;
      color: white;
      background-color: #007bff;
      padding: 5px 10px;
      border-radius: 5px;
      text-align: center;
      flex: 1;
    }


    `,
  ],
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Смартфон Apple iPhone 13 128Gb черный.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png',
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h26/86009676562462.png',
      name: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ черный',
      description: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ черный',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h5e/85429009285150.png',
      name: 'Смартфон Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
      description: 'Смартфон Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/hbf/86004903444510.png',
      name: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
      description: 'Смартфон Realme Note 50 4 ГБ/128 ГБ черный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-podarok-119359629/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/hfa/84599409541150.jpg',
      name: 'Кабель USB TypeC (M), Lightning белый',
      description: 'Кабель USB TypeC (M), Lightning белый',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/kabel-usb-typec-m-lightning-belyi-114949538/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/hcb/64422575767582.jpg',
      name: 'Стекло OEM для Apple iPhone 13 прозрачный',
      description: 'Стекло OEM для Apple iPhone 13 прозрачный',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/steklo-oem-dlja-apple-iphone-13-prozrachnyi-106865452/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/haf/65966324580382.jpg',
      name: 'Подставка Afkas-nova AK-37 черный',
      description: 'Подставка Afkas-nova AK-37 черный',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h02/85139519209502.jpg',
      name: 'Чехол для Apple iPhone 13 синий',
      description: 'Чехол Santa Barbara Polo & Racquet Club для Apple iPhone 13 синий',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/santa-barbara-polo-racquet-club-dlja-apple-iphone-13-sinii-116550010/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h48/87285032943646.jpg',
      name: 'Чехол Для Apple iPhone 16 Pro Max',
      description: 'Чехол Для Apple iPhone 16 Pro Max прозрачный',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-16-pro-max-prozrachnyi-124250944/?c=750000000'
    },
  ];

  whatsappLink(productLink: string): string {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(productLink)}`;
  }

  telegramLink(productLink: string): string {
    return `https://t.me/share/url?url=${encodeURIComponent(productLink)}`;
  }
}
