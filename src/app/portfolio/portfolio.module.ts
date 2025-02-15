import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSectionComponent } from './components/pages/home-section/home-section.component';


@NgModule({
  declarations: [
    HomeSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeSectionComponent
  ]
})
export class PortfolioModule { }
