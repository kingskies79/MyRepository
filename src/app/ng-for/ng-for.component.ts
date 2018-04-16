import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
people: any []=[];
   ngOnInit() {
     // tslint:disable-next-line:label-position
     this.people  = [
       {
        "name": "Fabio Leotta",
        "age" : 30
       },
       {
         "name": "John Lennon",
         "age": 35
       },
       {
         "name": "Pierluigi Neva",
         "age": 28
       }
     ]
  }

}
