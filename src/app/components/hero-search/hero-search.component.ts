import { Component, OnInit } from '@angular/core';
//Import the HeroService Injectable for use in queries/searches over the API
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor(private heroServicee: HeroService) {
    
   }

  ngOnInit() {
  }

}
