import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

export interface ResourceItem {
  id: number;
  postContent: {
    image?: Media;
    video?: Media;
    content: string;
  };
  postTitle: string;
  postDate: any;
  postCategory: Category[];
  postAuthor: User;
}

export interface Media {
  url: string;
  caption: string;
}

export interface Category {
  id: number;
  label: string;
}

export interface User {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  avatar?: Media;
  role?: Role[];
  displayTitle: string;
}

export interface Role {
  id: number;
  label: string;
}

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent implements OnInit {

  @Input() public _resource: ResourceItem;
  public hoverLabel: string;
  public readMoreLabel: string;

  constructor() {
    this.hoverLabel = 'Read Full Article';
    this.readMoreLabel = 'Read More →';
  }

  ngOnInit() {
    this._resource.postDate = moment.unix(this._resource.postDate).format('MMM Do YY');
  }

  ngAfterViewInit() {
  }
}
