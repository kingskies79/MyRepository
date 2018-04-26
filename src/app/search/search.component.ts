import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent   {
  private loading: boolean=false;
  constructor(private itunes: SearchService, private router:Router, private route: ActivatedRoute){
    this.route.params.subscribe(params => {
     
      if(params['term']){
        this.doSearch(params['term']);
      }
    });
  
  }
  doSearch(term: string){
    this.loading=true;
    this.itunes.search(term).then(_ =>this.loading=false);
  }
  onSearch(term:string){
    this.router.navigate(['search',{term:term}]);
  }
}
