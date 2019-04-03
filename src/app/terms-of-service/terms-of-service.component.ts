import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service.component.html',
  styleUrls: ['./terms-of-service.component.scss']
})
export class TermsOfServiceComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('StudyTree | Terms of Service');
  }

  ngOnInit() {
  }

}
