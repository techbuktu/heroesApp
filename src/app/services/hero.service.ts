import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
//Import the Hero class and the mock heroes data
import { Hero } from '../classes/hero';
import { HEROES } from '../mock-data/heroes.data';

//Import the MessageService for us in the HeroService.
import { MessageService } from './message.service';

//Import RxJS Observable object to simulate returning data from a Http API Service
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HeroService {


  constructor(private messageService:MessageService, private http: HttpClient) { 

  }
  private heroesUrl = 'api/heroes'; //Heroes API URL endpoint 

  private log(message:string){
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    //Todo: send the message __after__ fetching the heroes.
    //this.messageService.add('HeroService: fetched heroes');
    
  }

  getHero(id: number): Observable<Hero>{
    //Todo: send the message after fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));    
  }
  
}
