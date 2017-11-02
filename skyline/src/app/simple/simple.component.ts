import { Component, OnInit } from '@angular/core';

import {SimpleService} from '../simple-service';
import {OtherService} from '../other-service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {


   constructor(private simpleService: SimpleService) {



   }

  ngOnInit() {
  }

}
