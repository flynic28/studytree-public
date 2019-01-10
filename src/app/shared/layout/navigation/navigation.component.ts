import { Component, OnInit, Input } from '@angular/core';

export interface NavArray {
  navRoute: string;
  navLabel: string;
  childNav?: NavArray[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  @Input() public _navClass: string;
  @Input() public _navPrimary: boolean;
  public navArr = [];
  constructor() {
    this.navArr = [
      {
        navRoute: '#',
        navLabel: 'Why StudyTree',
        childNav: [
          {
            navRoute: 'our-science',
            navLabel: 'Our Science'
          }, {
            navRoute: 'meet-leon',
            navLabel: 'Meet LEON'
          }
        ]
      }, {
        navRoute: '#',
        navLabel: 'Platform',
        childNav: [
          {
            navRoute: 'higher-education',
            navLabel: 'Higher Education'
          }, {
            navRoute: 'corporate',
            navLabel: 'Corporate'
          }
        ]
      }, {
        navRoute: 'resources',
        navLabel: 'Resources'
      }, {
        navRoute: 'about-us',
        navLabel: 'About Us'
      }, {
        navRoute: 'request-demo',
        navLabel: 'Request Demo'
      }
    ];
  }

  ngOnInit() {
  }

}
