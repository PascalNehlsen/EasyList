import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ArrayService } from '../../services/array.service';

@Component({
  selector: 'app-plan-purchase',
  standalone: true,
  imports: [RouterModule, DialogComponent, MatDialogModule],
  templateUrl: './plan-purchase.component.html',
  styleUrl: './plan-purchase.component.scss',
})
export class PlanPurchaseComponent {
  getCategoryName(imagePath: string): string {
    const fileName = imagePath.split('/').pop()?.split('.').shift() || '';

    const withUmlauts = fileName
      .replace(/ae/g, 'ä')
      .replace(/oe/g, 'ö')
      .replace(/ue/g, 'ü')
      .replace(/ss/g, 'ß');

    return withUmlauts.charAt(0).toUpperCase() + withUmlauts.slice(1);
  }

  categories: string[] = [];

  constructor(public dialog: MatDialog, private dataService: ArrayService) {
    this.categories = this.dataService.getCategories();
  }

  openDialog(index: number) {
    const categoryName = this.getCategoryName(this.categories[index]);
    this.dialog.open(DialogComponent);
  }
}
