import { Component, OnInit } from '@angular/core';
import { CallOutConfig } from '../shared/callout-section/callout-section.component';
import { HeroConfig } from '../shared/hero/hero.component';
import { Title } from '@angular/platform-browser';
import { ResourceItem } from '../shared/resource-item/resource-item.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  public _heroConfig: HeroConfig;
  public _callOutConfig: CallOutConfig;
  public _resources : ResourceItem[];
  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Resources');
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
            gridWidth: 12,
            content: {
              header: {
                cssClass: 'weight-semi-bold',
                value: 'Industry Resources from Experts'
              },
              alignment: 'center'
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
    this._resources = [{
      id: 1,
      postContent: {
        image: {
          url: 'assets/images/generic/feature-2.jpg',
          caption: ''
        },
        content: ''
      },
      postTitle: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      postDate: 1547615260,
      postCategory: [{
        id: 1,
        label: 'Blog Post'
      }, {
        id: 4,
        label: 'Industry Insight'
      }],
      postAuthor: {
        id: 34,
        firstName: 'Jim',
        lastName: 'Smith',
        displayTitle: 'Provost of StudyTree'
      }
    }, {
      id: 2,
      postContent: {
        image: {
          url: 'assets/images/generic/blockchain.jpg',
          caption: ''
        },
        content: ''
      },
      postTitle: 'Voluptate velit esse.',
      postDate: 1555391260,
      postCategory: [{
        id: 4,
        label: 'Industry Insight'
      }],
      postAuthor: {
        id: 3,
        firstName: 'John',
        lastName: 'Doe',
        displayTitle: 'CTO of StudyTree'
      }
    }];

  }

  ngOnInit() {
  }

}
