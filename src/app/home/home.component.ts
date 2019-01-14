import { Component, OnInit } from '@angular/core';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public _heroConfig: HeroConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree');
    this._heroConfig = {
      template: 'hero-4',
      container: {
        backgroundURL: '../../assets/images/generic/blockchain.jpg',
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
                cssClass: 'weight-semi-bold',
                value: 'Improve Efficiency'
              },
              secondary: {
                cssClass: 'weight-semi-bold',
                value: 'From Student to Professionals'
              },
              alignment: 'left'
            }
          }
        ]
      }
    };
  }

  ngOnInit() {
  }

}
