import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayService {
  public shoppingList: string[] = [];

  mainCategories = {
    name: 'image-categories',
    items: [
      { src: './assets/images/image-categories/obst.png', selected: false },
      { src: './assets/images/image-categories/brot.png', selected: false },
      {
        src: './assets/images/image-categories/suessigkeiten.png',
        selected: false,
      },
      {
        src: './assets/images/image-categories/muesli.png',
        selected: false,
      },
      {
        src: './assets/images/image-categories/fleisch.png',
        selected: false,
      },
      {
        src: './assets/images/image-categories/gemuese.png',
        selected: false,
      },
      {
        src: './assets/images/image-categories/milchprodukte.png',
        selected: false,
      },
      {
        src: './assets/images/image-categories/getraenke.png',
        selected: false,
      },
    ],
  };

  images = {
    categories: [
      {
        name: 'obst',
        items: [
          { src: './assets/images/fruits/apple.png', selected: false },
          { src: './assets/images/fruits/banana.png', selected: false },
          { src: './assets/images/fruits/grapes.png', selected: false },
          { src: './assets/images/fruits/orange.png', selected: false },
          { src: './assets/images/fruits/pear.png', selected: false },
          { src: './assets/images/fruits/pineapple.png', selected: false },
        ],
      },
      {
        name: 'brot',
        items: [
          { src: './assets/images/baked-goods/bread.png', selected: false },
          {
            src: './assets/images/baked-goods/cinnamon-roll.png',
            selected: false,
          },
          { src: './assets/images/baked-goods/croissant.png', selected: false },
        ],
      },
      {
        name: 'suessigkeiten',
        items: [
          { src: './assets/images/sweets/candy.png', selected: false },
          { src: './assets/images/sweets/chocolate.png', selected: false },
          { src: './assets/images/sweets/cupcake.png', selected: false },
          { src: './assets/images/sweets/donut.png', selected: false },
          { src: './assets/images/sweets/waffles.png', selected: false },
        ],
      },
      {
        name: 'muesli',
        items: [
          {
            src: './assets/images/cereal-products/cereal.png',
            selected: false,
          },
          {
            src: './assets/images/cereal-products/cereals.png',
            selected: false,
          },
        ],
      },
      {
        name: 'fleisch',
        items: [{ src: './assets/images/meat/chicken.png', selected: false }],
      },
      {
        name: 'gemuese',
        items: [
          { src: './assets/images/vegetables/corn.png', selected: false },
          { src: './assets/images/vegetables/cucumber.png', selected: false },
          {
            src: './assets/images/vegetables/green-pepper.png',
            selected: false,
          },
          { src: './assets/images/vegetables/onion.png', selected: false },
          { src: './assets/images/vegetables/potato.png', selected: false },
          { src: './assets/images/vegetables/red-pepper.png', selected: false },
          { src: './assets/images/vegetables/salad.png', selected: false },
          {
            src: './assets/images/vegetables/yellow-pepper.png',
            selected: false,
          },
        ],
      },
      {
        name: 'milchprodukte',
        items: [
          { src: './assets/images/dairy-products/milk.png', selected: false },
          {
            src: './assets/images/dairy-products/yoghurt.png',
            selected: false,
          },
        ],
      },
      {
        name: 'getraenke',
        items: [
          { src: './assets/images/drinks/juice.png', selected: false },
          { src: './assets/images/drinks/soft-drink.png', selected: false },
          { src: './assets/images/drinks/softdrinks.png', selected: false },
          { src: './assets/images/drinks/water.png', selected: false },
        ],
      },
      {
        name: 'communication',
        items: [
          { src: './assets/images/communication/accept.png', selected: false },
          { src: './assets/images/communication/remove.png', selected: false },
        ],
      },
    ],
  };

  getCategoryByImage(index: number): string[] | null {
    const category = this.images.categories[index];

    return category ? category.items.map((item) => item.src) : null;
  }

  getMainCategories(): string[] {
    return this.mainCategories.items.map((item) => item.src) || [];
  }

  getShoppingList(): string[] {
    return this.shoppingList;
  }
}
