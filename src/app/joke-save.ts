import {Joke} from './joke';

export class JokeSave {
    ListJokes : Joke [] = [];
    maxJokes: number=10;
     numberJokes=0;
    saveJoke(j){
         this.numberJokes= this.numberJokes +1;
       
        if(this.numberJokes<10){
        this.ListJokes.push(j);
    }else {
        console.log('Numero di Joke massimo raggiunto' + this.numberJokes);
    }
    }
}
