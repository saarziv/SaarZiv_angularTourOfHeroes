import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { Hero } from '../classes/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  hero :Hero = {
    id :1,
    name: "windStorm"
  }

  constructor() { }

  ngOnInit() {
  }

}
