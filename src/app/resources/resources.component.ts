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
  constructor(
    public rest: RestService,
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
  }

  ngOnInit() {
    this.rest.getResources(1).subscribe(data => {
      console.log(data);
      this._resources = data;
    });
  }

}
