import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrayService } from '../../services/array.service';

@Component({
  selector: 'app-make-purchase',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './make-purchase.component.html',
  styleUrl: './make-purchase.component.scss',
})
export class MakePurchaseComponent implements OnInit {
  ngOnInit() {
    // Holt die shoppingList vom ArrayService
    this.shoppingList = this.arrayService.getShoppingList();
    console.log(this.shoppingList); // Zeigt die Liste in der Konsole
  }

  shoppingList: string[] = [];

  constructor(private arrayService: ArrayService) {}
}
