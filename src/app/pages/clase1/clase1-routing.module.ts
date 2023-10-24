import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Clase1Page } from './clase1.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Clase1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class Clase1PageRoutingModule {}
