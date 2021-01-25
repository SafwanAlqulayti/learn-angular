import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardFrontComponent } from './flip-card-front.component';
import { FlipCardBackComponent } from './flip-card-back.component';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [HomeComponent, FlipCardFrontComponent, FlipCardBackComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, FlipCardFrontComponent, FlipCardBackComponent]
})
export class FlipCardModule { }