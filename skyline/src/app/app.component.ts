import { Component } from '@angular/core';
import {FormComponent} from './form/form.component';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fb: FormBuilder = new FormBuilder;
  fc: FormComponent = new FormComponent(this.fb);
  title = 'Skyline';
}
