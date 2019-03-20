import { Component, OnInit } from '@angular/core';
import { GridConfig } from '../shared/row-section/grid.model';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-higher-education',
  templateUrl: './higher-education.component.html',
  styleUrls: ['./higher-education.component.scss']
})
export class HigherEducationComponent implements OnInit {

  public _callOutConfig: CallOutConfig;
  public _higherEd_1: GridConfig;
  public _higherEd_2: GridConfig;
  public _higherEd_3: GridConfig;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Higher Education Learning');
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
    this._higherEd_1 = {
      section: {
        cssClass: 'pb-20 pt-20 mt-80'
      },
      columns: [
        {
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/HigherEducation_1.png'
          }
        }, {
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Proactive Student Success',
              cssClass: 'mb-30'
            },
            paragraph: {
              value: ''
            }
          }
        }
      ]
    };
    this._higherEd_2 = {
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
            url: 'assets/images/HigherEducation_2.png'
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
              value: 'Academic Coach for Every Student',
              cssClass: 'mb-30'
            },
            paragraph: {
              value: ''
            }
          }
        }
      ]
    };
    this._higherEd_3 = {
      section: {
        cssClass: 'pb-20 pt-20 '
      },
      columns: [
        {
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/HigherEducation_3.png'
          }
        }, {
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Manage Academic Support Services',
              cssClass: 'mb-30'
            },
            paragraph: {
              value: ''
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

}
