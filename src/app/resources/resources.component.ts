import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
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
  public _resources: ResourceItem[];
  public page: number;
  public resourcesPerPage: number;
  public loadMoreLabel: string;
  public loadMoreDisabled: boolean;

  constructor(
    public rest: RestService,
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Resources');
    this.loadMoreLabel = 'Load More';
    this.loadMoreDisabled = false;
    this._heroConfig = {
      template: 'hero-4',
      container: {
        url: '../../assets/images/generic/blockchain.jpg',
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
                staticValue: 'Industry Resources from Experts'
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
    this.page = 1;
    this.resourcesPerPage = 6;
  }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.rest.getResources(this.page).subscribe(data => {
      if (this.page > 1) {
        this._resources = this._resources.concat(data);
      } else {
        this._resources = data;
      }
      this.loadMoreDisabled = this._resources.length % this.resourcesPerPage !== 0 ? true : false;
    },
    err => {
      this.loadMoreDisabled = true;
    });
  }

  loadMore() {
    if (!this.loadMoreDisabled) {
      this.page = this.page + 1;
      this.getResources();
    }
  }
}
