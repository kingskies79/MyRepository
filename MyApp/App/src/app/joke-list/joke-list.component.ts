import { Component, OnInit, ContentChild, ContentChildren, ViewChild, ElementRef, AfterViewInit, QueryList, ViewChildren, AfterContentInit } from '@angular/core';
import { Joke } from '../joke';
import {JokeComponent} from '../joke/joke.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {
  jokes: Joke[];
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
      console.log('newjokeViewChild ' + this.jokeViewChild);
    this.jokes = [
      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.!'
        ,
        'Non lo so'
        ,
        true),

      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.2!'
        ,
        'Non lo so. 2'
        ,
        true),

      new Joke('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum cupiditate corrupti ipsa eaque quisquam.3!'
        ,
        'Non lo so. 3'
        ,
        true)

    ];
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit - JokeViewChild is' + $, {this: this.jokeViewChild});
    const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log('ngAfterViewInit - headerEl is' + $, {this: this.headerEl});
    this.headerEl.nativeElement.textContent = 'Best Joke Machine';
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit - JokeContentChild is ' + $, {this: this.jokeContentChild});
  }
  insertJoke(Joke) {
    this.jokes.unshift(Joke);

  }
  delJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

}
