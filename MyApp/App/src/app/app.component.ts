import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  elements: any[] = [
    {
      'type':  'text',
      'value': 'Il mio primo testo',
      'title': 'Il mio primo titolo'
    },
    {
      'type':  'text',
      'value': 'Il mio secondo testo',
      'title': 'Il mio secondo titolo'
    },
    {
      'type':  'img',
      'value': 'https://dummyimage.com/600x400/000/fff',
      'title': 'Il mio terzo titolo'
    },
    {
      'type':  'img',
      'value': 'https://dummyimage.com/600x400/ccc/0011ff',
      'title': 'Il mio quarto titolo'
    }
  ];
}
