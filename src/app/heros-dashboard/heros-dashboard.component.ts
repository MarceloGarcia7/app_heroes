import { Component, OnInit } from '@angular/core';
import { HeroService } from "../utilities/hero.service";
import { Hero } from '../utilities/hero';
import { HEROES } from '../utilities/mock-heroes';

@Component({
  selector: 'app-heros-dashboard',
  templateUrl: './heros-dashboard.component.html',
  styleUrls: ['./heros-dashboard.component.css']
})
export class HerosDashboardComponent implements OnInit {

  heroesFromService: Hero[];
  selectedHero?: Hero;
  showModalEliminar: boolean = false;
  flag?:boolean;
  searchHeroValue:string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService
      .getHeroFromService()
      .subscribe((data: Hero[]) => {
        this.heroesFromService = data;
      });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  addNewHero(flag): void {
    this.flag = flag;
  }

  handleDelete(valueHero: Hero) {
    this.heroService.removeHeroes(valueHero)
      .subscribe((data:any) => {
        this.heroesFromService = this.heroesFromService.filter((hero:Hero)=> {
          return hero.id !== valueHero.id;
      })
    },
    response => {
      console.log("Delete call in error", response);
      alert("Delete call in error");
    });
  }

  closeModalEvent(boolean:boolean) {
    this.selectedHero = undefined;
    this.flag = undefined;
    this.showModalEliminar = false;
  }

  addNewHeroEvent(event:Hero) {
    event.id = Math.floor(Math.random() * (200 - 100)) + 1;
    this.heroService.addNewHeroe(event)
      .subscribe(
        (data:Hero) => {
        this.heroesFromService = [...this.heroesFromService, data];
        this.flag = undefined;
      },
      response => {
        console.log("Add_New_Hero call in error", response);
        this.flag = undefined;
        alert("Add_New_Hero call in error");
      });
  }

  updateHeroEvent(event:Hero) {
    this.heroService.updateHeroes(event)
      .subscribe((data:any) => {
        this.heroesFromService = this.heroesFromService.map( (heroe:Hero)=> {
          if(heroe.id === event.id) {
            heroe = Object.assign({}, heroe, event);
          }
          return heroe;
        });
      },
      response => {
        console.log("Update call in error", response);
        alert("Update call in error");
      });
    this.selectedHero = undefined;
  }

  searchHeroEvent(event:string) {
    this.searchHeroValue = event;
  }

}
