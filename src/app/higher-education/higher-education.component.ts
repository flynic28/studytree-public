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
        cssClass: 'pb-0 pt-20 mt-80'
      },
      columns: [
        {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          image: {
            url: 'assets/images/HigherEducation_1.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          text: {
            lead: {
              value: 'Higher Education',
              cssClass: 'mb-20'
            },
            header: {
              value: 'Proactive Student Success',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'We\'ll believe the root of student failure is behavioral. Leon is built to identify poor academic behavior and intervene before a studentfails their first exam. Think of us as a proactive solution to student success.'
            }
          }
        }
      ]
    };
    this._higherEd_2 = {
      section: {
        cssClass: 'pb-0 pt-0'
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
            url: 'assets/images/HigherEducation_2.png'
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
              value: 'Academic Coach for Every Student',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'When student need a helping hand, or start to slip, we got them covered. Leon analyzes students\' grades and behavioral patterns to construct customized recommendations to improve their academic performance.'
            }
          }
        }
      ]
    };
    this._higherEd_3 = {
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
            url: 'assets/images/HigherEducation_3.png'
          }
        }, {
          cssClass: 'pb-30 pt-30',
          gridWidth: {
            col: 6
          },
          text: {
            header: {
              value: 'Manage Academic\nSupport Services',
              cssClass: 'mb-20'
            },
            paragraph: {
              value: 'StudyTree serves administrators by providing managerial access to the application, which enables insight to useful statistics and an overview of each student\'s individual progress'
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
  }

}
