import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Import all components needing routing
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';


const routes:Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule{
    
}