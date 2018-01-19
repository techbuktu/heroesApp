import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HEROES } from '../../mock-data/heroes.data';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor() { 

  }
    

  ngOnInit() {
  }

}
