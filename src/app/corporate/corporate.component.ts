import { Component, OnInit } from '@angular/core';
import { GridConfig } from '../shared/row-section/grid.model';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent implements OnInit {

  public _callOutConfig: CallOutConfig;
  public _corporate_1: GridConfig;
  public _corporate_2: GridConfig;
  public _corporate_3: GridConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Corporate Learning');
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
    this._corporate_1 = {
      section: {
        cssClass: 'pb-0 pt-20 mt-80'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/CorporateLearning_1.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          text: {
            lead: {
              value: 'Corporate',
              cssClass: 'mb-20'
            },
            header: {
              value: 'Corporate Learning',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'We believe organizations thrive when employees demonstrate high executive functioning. Research shows that coaching is the best way to improve these skills'
            }
          }
        }
      ]
    };
    this._corporate_2 = {
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
            url: 'assets/images/CorporateLearning_2.png'
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
            header: {
              value: 'Everybody Hates\nself-reporting surveys',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'the old way of measuring employeee effectiveness requires boring surveys that collect cyber dust on some report. Rarely any actionable steps are taken to address issues.'
            }
          }
        }
      ]
    };
    this._corporate_3 = {
      section: {
        cssClass: 'pt-0 pb-20'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/MeetLeon_3.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Customized by You',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'Something about how we can use data from multiple systems to describe how an individual is performing.'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

}
