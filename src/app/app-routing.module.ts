import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdDescComponent } from './prod-desc/prod-desc.component';

const routes: Routes = [{ path: 'product', component: ProdDescComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
