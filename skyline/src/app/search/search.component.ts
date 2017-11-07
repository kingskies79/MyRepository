import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading = false;
  constructor(private itunes: SearchService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log('params' + params['term']);
      if (params['term']) {
        this.doSearch(params['term']);
      }
    })
  }

  doSearch(term: string) {
    this.loading = true;
    console.log ('term' + term);
     this.itunes.search(term).then(_ => this.loading = false);

   }
  ngOnInit() {
  }

  onSearch(term: string) {
    this.router.navigate(['search', {term: term}]);

   }
}
