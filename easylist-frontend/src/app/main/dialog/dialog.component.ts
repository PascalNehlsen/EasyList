import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayService } from '../../services/array.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  shoppingList: any[] = [];
  selectedIndices: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[],
    private arrayService: ArrayService
  ) {
    this.shoppingList = this.arrayService.shoppingList;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  moveToList(index: number) {
    const category = this.arrayService.images.categories[index];
    const item = category.items[index];
    item.selected = !item.selected;

    if (item.selected) {
      this.shoppingList.push(item);
    } else {
      this.shoppingList = this.shoppingList.filter(
        (shoppingItem) => shoppingItem !== item
      );
    }
  }
}
