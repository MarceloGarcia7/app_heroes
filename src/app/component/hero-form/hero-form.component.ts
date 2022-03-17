import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../utilities/hero';
import { HEROESPOWERS } from '../../utilities/hero-powers';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

    heroPowers = HEROESPOWERS;
    @Input() hero?: Hero;
    @Input() flag: boolean;
    @Output() handleHeroInfo: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  sendHeroInfo(heroInfo:Hero) {
    this.handleHeroInfo.emit(heroInfo);
  }

}
