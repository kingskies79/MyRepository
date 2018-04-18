import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  peopleByCountry: any[]=[];
  constructor() { }

  ngOnInit() {
    this.peopleByCountry= [
      {
        'country': 'UK',
        'people': [
          {
            "name": "Douglas Pace"
          },
          {
            "name": "Mcleod Mueller"
          }
        ]

      },
      {
        'country': 'USA',
        'people': [
          {
            "name": "Day Meyers"
          },
          {
            "name": "Aguirre Ellis"
          },
          {
            "name": "Cook Tyson"
          }
        ]
      },
      {
        'country': 'HK',
        'people': [
          {
            "name": "Dan Myller"
          },
          {
            "name": "Christin Ellis"
          },
          {
            "name": "Jack Tyson"
          }
        ]
      },
    ];
  }
  getColor(country){
    switch(country){
      case 'UK':
      return 'green';
      case 'USA':
      return 'blue';
      case 'HK' :
      return 'red';
    }
  }
}
