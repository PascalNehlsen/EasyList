import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plan-purchase',
  standalone: true,
  imports: [RouterModule, DialogComponent],
  templateUrl: './plan-purchase.component.html',
  styleUrl: './plan-purchase.component.scss',
})
export class PlanPurchaseComponent {
  categories: string[] = [
    './assets/images/image-categories/obst.png',
    './assets/images/image-categories/brot.png',
    './assets/images/image-categories/suessigkeiten.png',
    './assets/images/image-categories/muesli.png',
    './assets/images/image-categories/fleisch.png',
    './assets/images/image-categories/gemuese.png',
    './assets/images/image-categories/milchprodukte.png',
    './assets/images/image-categories/getraenke.png',
  ];

  constructor(private dialog: MatDialog) {}

  openCategory($index: number): void {
    console.log('text' + $index);
    const dialogRef = this.dialog.open(DialogComponent);
  }

  getCategoryName(imagePath: string): string {
    const fileName = imagePath.split('/').pop()?.split('.').shift() || '';

    const withUmlauts = fileName
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/ss/g, 'ß');

    return withUmlauts.charAt(0).toUpperCase() + withUmlauts.slice(1);
  }
}
