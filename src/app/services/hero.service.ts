import { Injectable } from '@angular/core';

//Import the Hero class and the mock heroes data
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-data/heroes.data';
import { MessageService } from './message.service';



@Injectable()
export class HeroService {


  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
