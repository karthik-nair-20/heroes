import { Component,OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Hero[] =[];



  constructor(private heroService: HeroService) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }
 

 
  getHeroes(){
    this.heroService.getHeroes().subscribe((val)=>{
      this.heroes = val;

    } );
  }

 


}
