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
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class HeroService {


  constructor(private messageService:MessageService, private http: HttpClient) { 

  }
  private heroesUrl = 'api/heroes'; //Heroes API URL endpoint 

  private log(message:string){
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
        catchError(this.handleError('getHeroes', []))
      );
    //Todo: send the message __after__ fetching the heroes.
    //this.messageService.add('HeroService: fetched heroes');
    
  }

  getHero(id: number): Observable<Hero>{
    //Todo: send the message after fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));    
  }
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
