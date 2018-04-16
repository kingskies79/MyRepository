import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-grouped',
  templateUrl: './ng-for-grouped.component.html',
  styleUrls: ['./ng-for-grouped.component.css']
})
export class NgForGroupedComponent implements OnInit {
 peopleByCountry: any[]=[]
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

}
