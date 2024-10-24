import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plan-purchase',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './plan-purchase.component.html',
  styleUrl: './plan-purchase.component.scss',
})
export class PlanPurchaseComponent {
  categories: string[] = [
    './assets/images/image-categories/apple.png',
    './assets/images/image-categories/bread.png',
    './assets/images/image-categories/candy.png',
    './assets/images/image-categories/cereal.png',
    './assets/images/image-categories/chicken.png',
    './assets/images/image-categories/cucumber.png',
    './assets/images/image-categories/milk.png',
    './assets/images/image-categories/water.png',
  ];
}
