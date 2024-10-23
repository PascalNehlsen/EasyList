import { Routes } from '@angular/router';
import { ShoppinglistCompontent } from './main/shopping-list/shopping-list.component';
import { AftComponent } from './main/aft/aft.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MakePurchaseComponent } from './main/make-purchase/make-purchase.component';
import { PlanPurchaseComponent } from './main/plan-purchase/plan-purchase.component';
import { SortAtHomeComponent } from './main/sort-at-home/sort-at-home.component';

export const routes: Routes = [
  { path: '', component: AftComponent },
  { path: 'make-a-purchase', component: MakePurchaseComponent },
  { path: 'plan-purchase', component: PlanPurchaseComponent },
  { path: 'sort-at-home', component: SortAtHomeComponent },
  { path: 'imprint', component: ImprintComponent },
];
