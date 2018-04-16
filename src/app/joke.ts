export class Joke {
    public Setup: String;
    public Punchline : String;
    public hide : boolean;
    
    constructor (setup: String, punchline: String){
        this.Setup=setup;
        this.Punchline = punchline;
    }
       toogle() {
   this.hide= !this.hide;
   }

}
