import { Component, OnInit } from '@angular/core';
import {JokeService} from '../joke-service';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {


  constructor(private jokeService: JokeService) {


  }


ngOnInit() {
  }

}
