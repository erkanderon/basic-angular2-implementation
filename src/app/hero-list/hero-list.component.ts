import { Component, OnInit} from '@angular/core';

import { Hero } 				from '../models/hero';
import { HeroService }        from '../services/hero.service';

@Component({
	moduleId: module.id,
	selector: 'hero-list',
	templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit{
	heroes: Hero[];
	selectedHero: Hero;

	constructor(private service: HeroService){}

	ngOnInit() {
    	this.heroes = this.service.getHeroes();
    }

  	selectHero(hero: Hero) { this.selectedHero = hero; }
}