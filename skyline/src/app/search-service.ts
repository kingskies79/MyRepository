import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SearchItem } from './search-item';
import { Observable } from 'rxjs/RX';
@Injectable()
export class SearchService {
    apiRoot = 'https://itunes.apple.com/search';
    results: Object[];
    loading: boolean;
    constructor(private http: Http) {
        this.results = [];
        this.loading = false;

    }
    search(term: string): Observable<SearchItem[]> {
         console.log('search');
        const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        return this.http.get(apiURL)
            .map(res => {
                return res.json().results
                    .map(item => {
                        return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
                    });
            });

    }
}


