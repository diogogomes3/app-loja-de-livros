import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRegisterComponent } from './book-register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookRegisterComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRegisterRoutingModule { }
