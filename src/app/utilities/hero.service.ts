import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

const Hero_Api: string = `${environment.backend}/heroes`;


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;
  headers = new HttpHeaders({
    'Content-Type':'applicaion/json'
  })



  constructor(private http: HttpClient) { }


  getHeroFromService(): Observable<Hero[]> {
    return this.http.get<Hero[]>(Hero_Api)
  }

  addNewHeroe(hero: Hero): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(hero);
    return this.http.post(`${Hero_Api}`, body, {headers} );
  }

  updateHeroes(hero: Hero): Observable<any> {
    return this.http.put(`${Hero_Api}/${hero.id}`, hero);
  }

  removeHeroes(hero: Hero): Observable<any> {
    return this.http.delete(`${Hero_Api}/${hero.id}`);
  }
}
