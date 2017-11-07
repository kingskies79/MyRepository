import { Injectable } from '@angular/core';
import {  Jsonp } from '@angular/http';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs/RX';

@Injectable()
export class SearchService {
    apiRoot = 'https://itunes.apple.com/search';
    results: SearchItem[];
    loading: boolean;
    constructor(private jsonp: Jsonp) {
        this.results = [];
        this.loading = false;

    }
    search(term: string) {
        return new Promise ((resolve, reject) => {
            this.results = [];
            const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
            this.jsonp.get(apiURL)
            .toPromise()
            .then(
                res => {
                this.results = res.json().results.map(item => {
                    return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);


                });
                resolve();
            },
            msg => {
                reject(msg);
            }
        );

                    });


    }
}


