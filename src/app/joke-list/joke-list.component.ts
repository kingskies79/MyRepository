import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import {JokeComponent} from '../joke/joke.component';
import {Joke} from '../joke';
import {JokeSave} from '../joke-save';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  providers: [JokeSave]
  
})
export class JokeListComponent implements OnInit, AfterViewInit {
 
  
 Jokes : Joke [] = [
      new Joke('Disse la vacca al mulo', 'Oggi ti puzza il culo'),
      new Joke('Rispose il mulo alla vacca', 'Ho appena fatto la cacca'),
      new Joke('Chi tardi arriva', 'male alloggia')
    ];

    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList <JokeComponent>;
    constructor(private store: JokeSave){}
    
  ngOnInit() {
  }
  
 addJoke(j){
   
  this.Jokes.unshift(j);
  this.store.saveJoke(j);
  console.log(this.store.ListJokes);
  }
  ngAfterViewInit(){
    
    let jokes: JokeComponent[]= this.jokeViewChildren.toArray();
    console.log(jokes);
  }
}
