import { Component } from '@angular/core';
import { ProductListComponent } from './productlist/productlist.component';
import { Category } from './models/category.model';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  categories: { name: string; products: Product[] }[] = [
    { name: 'Phones', products: [
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
      }
    ] },
    { name: 'Laptops', products: [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg',
        name: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
        description: 'Ноутбук ThundeRobot 911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/thunderobot-911-x-wild-hunter-g2-pro-15-6-16-gb-ssd-512-gb-win-11-pro--120386920/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg',
        name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
        description: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63-100797845/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h68/86642069504030.jpg',
        name: 'Ноутбук Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512 Гб / Win 11 Home / 0167563995',
        description: 'Ноутбук Acer Gadget E10 ETBook 14" / 16 Гб / SSD 512 Гб / Win 11 Home / 0167563995',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/acer-gadget-e10-etbook-14-16-gb-ssd-512-gb-win-11-home-0167563995-121895857/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p79/p58/7357175.jpg',
        name: 'Ноутбук Acer Aspire Lite 15.6" / 8 Гб / SSD 256 Гб / Win 11 Pro / AL15-31P / NX.KZ7ER.01W',
        description: 'Ноутбук Acer Aspire Lite 15.6" / 8 Гб / SSD 256 Гб / Win 11 Pro / AL15-31P / NX.KZ7ER.01W',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/acer-aspire-lite-15-6-8-gb-ssd-256-gb-win-11-pro-al15-31p-nx-kz7er-01w-129758983/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb2/p55/6404357.jpg',
        name: 'Ноутбук Chuwi GemiBook Plus 15.6" / 16 Гб / SSD 512 Гб / Win 11 Home / JGeBPLCY1H231200374',
        description: 'Ноутбук Chuwi GemiBook Plus 15.6" / 16 Гб / SSD 512 Гб / Win 11 Home / JGeBPLCY1H231200374',
        rating: 4.6,
        link: 'https://kaspi.kz/shop/p/chuwi-gemibook-plus-15-6-16-gb-ssd-512-gb-win-11-home-jgebplcy1h231200374-113974603/?c=750000000'
      }
    ] },
    { name: 'Tablets', products: [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/64865317584926.jpg',
        name: 'Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый',
        description: 'Планшет Apple iPad 2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/apple-ipad-2022-10-9-wi-fi-10-9-djuim-4-gb-64-gb-serebristyi-107264764/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa9/p5b/4912194.jpg',
        name: 'Планшет Huawei MatePad S Keyboard TGR-W09 11.5 дюйм 8 Гб/256 Гб серебристый',
        description: 'Планшет Huawei MatePad S Keyboard TGR-W09 11.5 дюйм 8 Гб/256 Гб серебристый',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/huawei-matepad-s-keyboard-tgr-w09-11-5-djuim-8-gb-256-gb-serebristyi-122142240/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/hb6/82720277397534.jpg',
        name: 'Планшет Xiaomi Redmi Pad SE 11 дюйм 4 Гб/128 Гб серый',
        description: 'Планшет Xiaomi Redmi Pad SE 11 дюйм 4 Гб/128 Гб серый',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-4-gb-128-gb-seryi-112442987/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/hdc/84176279076894.jpg',
        name: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб синий',
        description: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб синий',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-sinii-113806822/?c=750000000'
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hfd/84683862507550.jpg?format=gallery-medium',
        name: 'Планшет Xiaomi Redmi Pad SE 11 дюйм 8 Гб/256 Гб зеленый',
        description: 'Планшет Xiaomi Redmi Pad SE 11 дюйм 8 Гб/256 Гб зеленый',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-zelenyi-115224312/?c=750000000'
      }
    ] },
    { name: 'Accessories', products: [
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
      }
    ] }
  ];
  selectedProducts: Product[] = [];

  selectCategory(category: Category): void { 
    this.selectedProducts = [...category.products];
  }

  removeProduct(product: any) {
    this.selectedProducts = this.selectedProducts.filter(p => p !== product);
  }
}