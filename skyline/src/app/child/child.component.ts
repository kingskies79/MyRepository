import { Component, OnInit } from '@angular/core';
import {SimpleService} from '../simple-service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //Providers: [SimpleService]
})
export class ChildComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
