import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HEROES } from '../../mock-data/heroes.data';

//Import the Service classes to inject and use in this component
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;

  hero:Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor(public messageService:MessageService, private heroService:HeroService) { 
    
  }

  ngOnInit() {
  }

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }

}