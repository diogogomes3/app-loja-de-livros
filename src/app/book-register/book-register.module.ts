import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRegisterRoutingModule } from './book-register.routing.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BookRegisterComponent } from './book-register.component';

@NgModule({
  declarations: [
    BookRegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    BookRegisterRoutingModule
  ]
})
export class BookRegisterModule { }
