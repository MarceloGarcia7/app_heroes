import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../utilities/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  editing: boolean = false;
  @Input() hero?: Hero;
  @Input() flag: boolean;
  @Input() showModalEliminar: boolean;
  @Output() updatedHero: EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() addNewHero: EventEmitter<Hero> = new EventEmitter<Hero>();
  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.closeModalEvent.emit(this.editing);
  }

  handleHeroInfoEvent(updatedHero:Hero) {
    if(updatedHero.id === null) {
      this.addNewHero.emit(updatedHero);
    } else {
      this.updatedHero.emit(updatedHero);
    }
  }

}
