import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayService {
  images = {
    categories: [
      {
        name: 'image-categories',
        items: [
          './assets/images/image-categories/obst.png',
          './assets/images/image-categories/brot.png',
          './assets/images/image-categories/suessigkeiten.png',
          './assets/images/image-categories/muesli.png',
          './assets/images/image-categories/fleisch.png',
          './assets/images/image-categories/gemuese.png',
          './assets/images/image-categories/milchprodukte.png',
          './assets/images/image-categories/getraenke.png',
        ],
      },
      {
        name: 'baked-goods',
        items: [
          './assets/images/baked-goods/bread.png',
          './assets/images/baked-goods/cinnamon-roll.png',
          './assets/images/baked-goods/croissant.png',
        ],
      },
      {
        name: 'cereal-products',
        items: [
          './assets/images/cereal-products/cereal.png',
          './assets/images/cereal-products/cereals.png',
        ],
      },
      {
        name: 'communication',
        items: [
          './assets/images/communication/accept.png',
          './assets/images/communication/remove.png',
        ],
      },
      {
        name: 'dairy-products',
        items: [
          './assets/images/dairy-products/milk.png',
          './assets/images/dairy-products/yoghurt.png',
        ],
      },
      {
        name: 'drinks',
        items: [
          './assets/images/drinks/juice.png',
          './assets/images/drinks/soft-drink.png',
          './assets/images/drinks/softdrinks.png',
          './assets/images/drinks/water.png',
        ],
      },
      {
        name: 'fruits',
        items: [
          './assets/images/fruits/apple.png',
          './assets/images/fruits/banana.png',
          './assets/images/fruits/grapes.png',
          './assets/images/fruits/orange.png',
          './assets/images/fruits/pear.png',
          './assets/images/fruits/pineapple.png',
        ],
      },
      {
        name: 'meat',
        items: ['./assets/images/meat/chicken.png'],
      },
      {
        name: 'sweets',
        items: [
          './assets/images/sweets/candy.png',
          './assets/images/sweets/chocolate.png',
          './assets/images/sweets/cupcake.png',
          './assets/images/sweets/donut.png',
          './assets/images/sweets/waffles.png',
        ],
      },
      {
        name: 'vegetables',
        items: [
          './assets/images/vegetables/corn.png',
          './assets/images/vegetables/cucumber.png',
          './assets/images/vegetables/green-pepper.png',
          './assets/images/vegetables/onion.png',
          './assets/images/vegetables/potato.png',
          './assets/images/vegetables/red-pepper.png',
          './assets/images/vegetables/salad.png',
          './assets/images/vegetables/yellow-pepper.png',
        ],
      },
    ],
  };

  getCategories(): string[] {
    const imageCategory = this.images.categories.find(
      (category) => category.name === 'image-categories'
    );
    return imageCategory ? imageCategory.items : [];
  }
}
