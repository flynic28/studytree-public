import { Component, OnInit } from '@angular/core';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';
import { GridConfig } from '../shared/row-section/grid.model';

@Component({
  selector: 'app-our-science',
  templateUrl: './our-science.component.html',
  styleUrls: ['./our-science.component.scss']
})
export class OurScienceComponent implements OnInit {

  public _ourScience_1: GridConfig;
  public _ourScience_2: GridConfig;
  public _ourScience_3: GridConfig;
  public _callOutConfig: CallOutConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Our Science');
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
    this._ourScience_1 = {
      section: {
        cssClass: 'pb-0 pt-20 mt-80'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          pushCol: {
            col: 6
          },
          image: {
            url: 'assets/images/OurScience_1.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          pullCol: {
            col: 6
          },
          text: {
            lead: {
              value: 'Our Science',
              cssClass: 'mb-20'
            },
            header: {
              value: 'We Love Research',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'The lastest advancements in behavioral science and artificial intelligence fuels our approach to human improvement.'
            }
          }
        }
      ]
    };
    this._ourScience_2 = {
      section: {
        cssClass: 'pt-0 pb-0'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          pushCol: {
            col: 6
          },
          image: {
            url: 'assets/images/OurScience_3.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          pullCol: {
            col: 6
          },
          text: {
            lead: {
              value: 'Our Secret Sauce',
              cssClass: 'mb-20'
            },
            header: {
              value: 'AI is the Future',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'Artificial intelligence gives you the power of a thousand coaches for the cost of one. This means extremely personalized engagement that builds a truly empathic relationship.'
            }
          }
        }
      ]
    };
    this._ourScience_3 = {
      section: {
        cssClass: 'pb-20 pt-0'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/OurScience_4.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Data Driven Success',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'We\'ll drive success around the metrics that your organization values most.'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

}
