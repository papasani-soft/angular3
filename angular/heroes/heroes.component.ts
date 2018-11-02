import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 /* heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
 */
  selectedHero: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
heroes: Hero[];
  constructor(private heroService: HeroService) { }
/*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
 

}
