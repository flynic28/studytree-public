import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface CallOutConfig {
  template: 'call-to-action-1' | 'call-to-action-2' | 'call-to-action-3' | '';
  container?: CallOutContainer;
  label?: CallOutLabel;
  button?: CallOutButton;
}

export interface CallOutContainer {
  alignContent?: 'left' | 'center' | 'right' | '';
  backgroundURL?: string;
  backgroundColor?: string;
  cssClass?: string;
}

export interface CallOutLabel {
  value: string;
  cssClass?: string;
  strong?: boolean;
}

export interface CallOutButton {
  label: CallOutLabel;
  route: string;
  cssClass?: string;
}

@Component({
  selector: 'app-callout-section',
  templateUrl: './callout-section.component.html',
  styleUrls: ['./callout-section.component.scss']
})
export class CalloutSectionComponent implements OnInit {

  @Input() callOutConfig: CallOutConfig;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  callOutBtnClick(clickRoute: any) {
    this.router.navigate(clickRoute);
  }

}
