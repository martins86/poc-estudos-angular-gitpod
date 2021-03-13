import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PocDemoComponent } from './poc-demo.component';

const routes: Routes = [{ path: '', component: PocDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocDemoRoutingModule {}
