import { Component, OnInit } from '@angular/core';
//Import the HeroService Injectable for use in queries/searches over the API
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../classes/hero';

//Import reactive extensions/elements from the rxjs library
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroServicee: HeroService) {
    
   }

  // Push a search term into the observable stream.
  search(term:string):void {
    this.searchTerms.next(term);
  }


  ngOnInit():void {
    this.heroes$ = this.searchTerms.pipe(
      //Wait for 300ms after each keystroke before considering the term
      debounceTime(300),
      // Ignore new term is same as the precious term.
      distinctUntilChanged(),

      // Swicth to the new search observable each time the term changes.
      switchMap((term:string) => this.heroServicee.searchHeroes(term)),
    );
  }

}
