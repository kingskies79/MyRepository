import { Component, Input } from '@angular/core';
import {Joke} from '../app/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  joke: Joke = new Joke ('Chi cerca trova', ' Ku sekita vinci' );
}
