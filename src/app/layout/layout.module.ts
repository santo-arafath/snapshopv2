import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    ]
})
export class LayoutModule { }
