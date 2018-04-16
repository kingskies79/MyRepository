import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {JokeComponent} from '../joke/joke.component';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit {
 
  
 Jokes : Joke [] = [
      new Joke('Disse la vacca al mulo', 'Oggi ti puzza il culo'),
      new Joke('Rispose il mulo alla vacca', 'Ho appena fatto la cacca'),
      new Joke('Chi tardi arriva', 'male alloggia')
    ];

    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList <JokeComponent>;
    
  ngOnInit() {
  }
  
 addJoke(j){
  this.Jokes.unshift(j);
  }
  ngAfterViewInit(){
    console.log(`ngAfterViewInit ${this.jokeViewChild}`);
    let jokes: JokeComponent[]= this.jokeViewChildren.toArray();
    console.log(jokes);
  }
}
