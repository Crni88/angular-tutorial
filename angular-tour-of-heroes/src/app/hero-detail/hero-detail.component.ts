import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Hero
} from '../hero';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Location
} from '@angular/common';
import {
  HeroService
} from '../hero.service';
import {
  SuperPowers
} from '../hero-powers';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?: Hero;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    //console.log(this.hero);
  }

  goBack(): void {
    this.location.back();
  }


  displayVal: string = "";


  power: SuperPowers = {
    id: 0,
    superPowerName: ""
  };


  addPower(val: string): void {
    this.power.id = this.power.id + 1;
    this.power.superPowerName = val;

    const objectArray = Object.entries(this.power);
    console.log(objectArray);

  }
}
