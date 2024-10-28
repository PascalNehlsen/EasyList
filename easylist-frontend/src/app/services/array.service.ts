import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArrayService {
  private categories: string[] = [
    './assets/images/image-categories/obst.png',
    './assets/images/image-categories/brot.png',
    './assets/images/image-categories/suessigkeiten.png',
    './assets/images/image-categories/muesli.png',
    './assets/images/image-categories/fleisch.png',
    './assets/images/image-categories/gemuese.png',
    './assets/images/image-categories/milchprodukte.png',
    './assets/images/image-categories/getraenke.png',
  ];

  getCategories(): string[] {
    return this.categories;
  }
}
