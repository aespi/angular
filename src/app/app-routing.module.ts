import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdDescComponent } from './prod-desc/prod-desc.component';
import { ItemSelectorComponent } from './item-selector/item-selector.component';

const routes: Routes = [
  { path: 'product', component: ProdDescComponent },
  { path: 'selector', component: ItemSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
