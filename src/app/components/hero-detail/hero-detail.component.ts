import { Component, OnInit, Input } from '@angular/core';

import {Hero} from '../../classes/hero';

//Import the Service classes to inject and use in this component
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

//Import routing classes for use with detail views.
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;

  constructor(public messageService:MessageService, private heroService:HeroService, private route: ActivatedRoute, private locatiom: Location) { 
    
  }

  ngOnInit() {
    this.getHero();
  }

  getHero():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(
    hero => this.hero =hero
    )
  }

}