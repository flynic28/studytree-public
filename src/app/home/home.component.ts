import { Component, OnInit } from '@angular/core';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _heroConfig: HeroConfig;
  public _callOutConfig: CallOutConfig;
  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree');
    this._heroConfig = {
      template: 'hero-4',
      container: {
        backgroundURL: '../../assets/images/studytree_HeroIMG@0,75x.png',
      },
      content: {
        row: {
          fullWidth: false
        },
        columns: [
          {
            gridWidth: 6,
            gridOffset: 6,
            content: {
              header: {
                cssClass: 'weight-bold mb-0',
                value: '<span class="accent">Improve</span> Efficiency'
              },
              secondary: {
                cssClass: 'weight-semi-bold',
                value: 'From Student to Professionals'
              },
              alignment: 'right'
            }
          }
        ]
      }
    };
    this._callOutConfig = {
      template: '',
      container: {
        cssClass: 'pt-50 pb-50 bkg-grey',
        alignContent: 'center'
      },
      button: {
        label: {
          value: 'Request Demo',
          strong: true
        },
        route: '',
        cssClass: 'button rounded border-white color-white color-hover-white mb-0'
      }
    };
  }

  ngOnInit() {
  }

}
