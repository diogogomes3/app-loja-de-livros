import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss'],
})
export class BookRegisterComponent implements OnInit {

  public formBook: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.formBook = this.createForm();

  }

  ngOnInit() {}

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null],
      author: [null]
    })
  }

  public saveBook() {}
}
