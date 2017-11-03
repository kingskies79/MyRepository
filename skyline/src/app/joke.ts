
export class Joke {
    setup: string;
    punchline: string;
    hide: boolean;
    constructor (setup: string, punchline: string, hide: boolean) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = hide;
    }
    toggle () {
        this.hide = !this.hide;
      }
}
