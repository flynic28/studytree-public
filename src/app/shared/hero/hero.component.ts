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

export interface HeroMedia {
  bgSize?: 'contain' | 'cover';
  bgPosY?: 'center' | 'top' | 'bottom' | string;
  bgPosX?: 'left' | 'center' | 'right' | string;
  url: string;
}

export interface HeroContainer extends HeroMedia {
  cssClass?: string;
}

export interface HeroMediaCol extends HeroMedia {
  side: 'left' | 'right';
  gridWidth: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gridOffset?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pushCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  pullCol?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
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
  staticValue?: string;
  typeJS?: string[];
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
      'background-image': this.heroConfig.container.url ? 'url(' + this.heroConfig.container.url + ')' : null,
      'background-size': this.heroConfig.container.bgSize || 'cover',
      'background-position-y': this.heroConfig.container.bgPosY || 'center',
      'background-position-x': this.heroConfig.container.bgPosX || 'center',
    };
    return styles;
  }

}
