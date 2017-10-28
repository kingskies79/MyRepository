import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'French',
    'German',
    'Italian'
  ];


  constructor() {
    this.createFormControl();
    this.createForm();
  }

  ngOnInit() {

  }
  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }
  createFormControl() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.language = new FormControl('', Validators.required);
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log('Form Submitted!');
      this.myform.reset();
    } else {
      console.log('Form not Valid!');
    }
  }
}
