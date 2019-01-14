import { Component, OnInit } from '@angular/core';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-meet-leon',
  templateUrl: './meet-leon.component.html',
  styleUrls: ['./meet-leon.component.scss']
})
export class MeetLeonComponent implements OnInit {

  public _heroConfig: HeroConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Meet LEON');
    this._heroConfig = {
      template: 'hero-5',
      media: {
        side: 'left',
        url: '../../assets/images/generic/blockchain.jpg',
        gridWidth: 6
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
                value: 'Meet LEON'
              },
              paragragh: {
                cssClass: 'weight-semi-bold',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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
