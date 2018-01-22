import { Injectable } from '@angular/core';

//Import the Hero class and the mock heroes data
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-data/heroes.data';
import { MessageService } from './message.service';

//Import RxJS Observable object to simulate returning data from a Http API Service
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class HeroService {


  constructor(private messageService:MessageService) { 

  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
