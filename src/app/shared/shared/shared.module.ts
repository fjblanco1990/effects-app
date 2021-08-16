import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //por que se pretende utilizar este componente fuera de ese modulo
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
