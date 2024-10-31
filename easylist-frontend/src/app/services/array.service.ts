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
        name: 'brot',
        items: [
          './assets/images/baked-goods/bread.png',
          './assets/images/baked-goods/cinnamon-roll.png',
          './assets/images/baked-goods/croissant.png',
        ],
      },
      {
        name: 'muesli',
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
        name: 'milchprodukte',
        items: [
          './assets/images/dairy-products/milk.png',
          './assets/images/dairy-products/yoghurt.png',
        ],
      },
      {
        name: 'getraenke',
        items: [
          './assets/images/drinks/juice.png',
          './assets/images/drinks/soft-drink.png',
          './assets/images/drinks/softdrinks.png',
          './assets/images/drinks/water.png',
        ],
      },
      {
        name: 'obst',
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
        name: 'fleisch',
        items: ['./assets/images/meat/chicken.png'],
      },
      {
        name: 'suessigkeiten',
        items: [
          './assets/images/sweets/candy.png',
          './assets/images/sweets/chocolate.png',
          './assets/images/sweets/cupcake.png',
          './assets/images/sweets/donut.png',
          './assets/images/sweets/waffles.png',
        ],
      },
      {
        name: 'gemuese',
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

  getCategoryByImage(imagePath: string): string[] | null {
    // Extrahiere den Dateinamen ohne die Dateiendung
    const fileNameWithoutExtension = imagePath
      .split('/')
      .pop() // z.B. 'brot.png'
      ?.split('.')[0]; // Entfernt die Dateiendung, z.B. 'brot'

    // Finde die Kategorie, die den Namen ohne Endung enthält
    const category = this.images.categories.find(
      (cat) => cat.name === fileNameWithoutExtension
    );

    // Gibt die gefundenen Elemente der Kategorie zurück oder null, wenn keine gefunden wurde
    return category ? category.items : null;
  }

  getMainCategories(): string[] {
    return (
      this.images.categories.find((cat) => cat.name === 'image-categories')
        ?.items || []
    );
  }
}
