import { Component, Input } from '@angular/core';

import { Hero } from '../models/hero';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}