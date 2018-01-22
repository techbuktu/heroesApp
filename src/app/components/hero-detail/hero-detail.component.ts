import { Component, OnInit, Input } from '@angular/core';

import {Hero} from '../../classes/hero';

//Import the Service classes to inject and use in this component
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;

  constructor(public messageService:MessageService, private heroService:HeroService) { 
    
  }

  ngOnInit() {
    console.log(this.hero);
  }

}