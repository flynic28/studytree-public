import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export interface HeroConfig {
  template: 'hero-1' | 'hero-2' | 'hero-3' | 'hero-4' | 'hero-5' | 'hero-6' | 'hero-7' | 'hero-8' | 'custom' | '';
  container?: HeroContainer;
  media?: HeroMediaCol;
  content: {
    row: HeroRow;
    columns: HeroCol[];
  };
}

export interface HeroContainer {
  backgroundURL?: string;
  cssClass?: string;
}

export interface HeroMediaCol {
  side: 'left' | 'right';
  bgSize?: 'contain' | 'cover';
  gridWidth: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridOffset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pushCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pullCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  url: string;
}

export interface HeroRow {
  fullWidth: boolean;
  cssClass?: string;
}

export interface HeroCol {
  gridWidth: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridOffset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pushCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pullCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  cssClass?: string;
  content: HeroColContent;
}

export interface HeroColContent {
  alignment: 'left' | 'center' | 'right';
  cssClass?: string;
  header?: LabelConfig;
  secondary?: LabelConfig;
  paragragh?: LabelConfig;
}

export interface LabelConfig {
  value: string;
  cssClass?: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit {
  @Input() heroConfig: HeroConfig;
  constructor() {
  }

  ngOnInit() {
  }

  setBgStyle() {
    const styles = {
      'background-image': this.heroConfig.media.url ? 'url(' + this.heroConfig.media.url + ')' : null,
      'background-size': this.heroConfig.media.bgSize || 'cover'
    };
    return styles;
  }

}
