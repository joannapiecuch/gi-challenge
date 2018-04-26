import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mobileActive: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  activateMobilemenu() {
    this.mobileActive = !this.mobileActive;
    console.log(this.mobileActive);
  }

}
