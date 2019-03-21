import { Component, OnInit } from '@angular/core';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';
import { GridConfig } from '../shared/row-section/grid.model';

@Component({
  selector: 'app-meet-leon',
  templateUrl: './meet-leon.component.html',
  styleUrls: ['./meet-leon.component.scss']
})
export class MeetLeonComponent implements OnInit {

  public _heroConfig: HeroConfig;
  public _callOutConfig: CallOutConfig;
  public _meetLeon_1: GridConfig;
  public _meetLeon_2: GridConfig;
  public _meetLeon_3: GridConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Meet LEON');
    this._heroConfig = {
      template: 'hero-5',
      media: {
        side: 'left',
        url: '../../assets/images/MeetLeon_1.png',
        bgSize: 'contain',
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
                value: 'Your New AI Coach'
              },
              paragragh: {
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              },
              alignment: 'left'
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
    this._meetLeon_1 = {
      section: {
        cssClass: 'pb-20 pt-20 mt-80'
      },
      columns: [
        {
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/MeetLeon_1.png'
          }
        }, {
          gridWidth: {
            col: 6
          },
          text: {
            lead: {
              value: 'Meet Leon',
              cssClass: 'mb-20'
            },
            header: {
              value: 'Your New AI Coach',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'Leon is an AI powered coach that works with each user on a 1 on 1 basis. He\'ll identify performance signals, set goals, and deploy intervention strategies before escalating to human involvment'
            }
          }
        }
      ]
    };
    this._meetLeon_2 = {
      section: {
        cssClass: 'pb-20 pt-20'
      },
      columns: [
        {
          gridWidth: {
            col: 6
          },
          pushCol: {
            col: 6
          },
          image: {
            url: 'assets/images/MeetLeon_2.png'
          }
        }, {
          gridWidth: {
            col: 6
          },
          pullCol: {
            col: 6
          },
          text: {
            header: {
              value: 'Trained by Thousands',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'Leon\'s intelligence continues to grow from the thousands of students am employees that talk with him on a daily basis. This allows Leon to identify performance issues earlier and propose the best resolutions.'
            }
          }
        }
      ]
    };
    this._meetLeon_3 = {
      section: {
        cssClass: 'pb-20 pt-20 '
      },
      columns: [
        {
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/MeetLeon_3.png'
          }
        }, {
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Customized by You',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'Leon will become a member of your organization; your very own on-site behavioral coach. He\'ll integration into your existing systems such as SalesForce, Blackboard, Canvas, or whatever performance data is being collected. You\'ll tell Leon which metrics matter most, and he\'ll take it from there.'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

}
