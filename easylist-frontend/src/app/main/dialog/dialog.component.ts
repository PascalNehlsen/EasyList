import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArrayService } from '../../services/array.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  shoppingList: string[];

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

  moveToList($index: number) {
    let i = $index;
    console.log(this.data[i]);

    this.shoppingList.push(this.data[i]);
    console.log(this.shoppingList);
  }
}
