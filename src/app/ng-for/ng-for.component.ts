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
        "name": "Fabio Leotta"
       },
       {
         "name": "John Lennon"
       },
       {
         "name": "Pierluigi Neva"
       }
     ]
  }

}
