import { Component, OnInit } from '@angular/core';
import {JokeComponent} from '../joke/joke.component';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
 public Jokes : Joke [];
  constructor() {
    this.Jokes = [
      new Joke('Disse la vacca al mulo', 'Oggi ti puzza il culo'),
      new Joke('Rispose il mulo alla vacca', 'Ho appena fatto la cacca'),
      new Joke('Chi tardi arriva', 'male alloggia')
    ]
    
  

   }

  ngOnInit() {
  }
  
 addJoke(j){
  this.Jokes.unshift(j);
  }
}

  