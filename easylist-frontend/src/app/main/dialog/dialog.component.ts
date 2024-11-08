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
  selectedIndex: number | null = null;

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
    if (this.selectedIndex === index) {
      this.selectedIndex = null;
    } else {
      this.selectedIndex = index;
      this.shoppingList.push(this.data[index]);
    }
    console.log(this.shoppingList);
  }
}
