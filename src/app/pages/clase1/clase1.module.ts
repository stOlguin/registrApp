import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Clase1PageRoutingModule } from './clase1-routing.module';

import { Clase1Page } from './clase1.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Clase1PageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [Clase1Page]
})
export class Clase1PageModule {}
