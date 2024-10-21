import { Routes } from '@angular/router';
import { ShoppinglistCompontent } from './main/shopping-list/shopping-list.component';
import { AftComponent } from './main/aft/aft.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: AftComponent },
  { path: 'imprint', component: ImprintComponent },
];
