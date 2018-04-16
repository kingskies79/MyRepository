import { Component, OnInit, Input, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  @Input() joke: Joke;
  //public joke : Joke;
 
constructor(){
 // console.log(`new - data is ${this.joke}`);
}
  
  ngOnInit() {
 //   console.log(`ngOnInit ${this.joke}`);
  }
  ngOnChanges(){
  //  console.log(`ngOnChanges ${this.joke}`);
  }
  ngOnDestroy(){
 //   console.log(`ngOnDestroy ${this.joke}`);
  }
  ngAfterContentChecked(){
 //   console.log(`ngAfterContentChecked ${this.joke}`);
  }
  ngAfterContentInit(){
 //   console.log(`ngAfterContentInit ${this.joke}`);
  }
  ngAfterViewChecked(){
 //   console.log(`ngAfterViewChecked ${this.joke}`);
  }
   ngAfterViewInit(){
  //  console.log(`ngAfterViewInit ${this.joke}`);
   }
   ngDoCheck(){
   // console.log(`ngDoCheck ${this.joke}`);
   }


}
