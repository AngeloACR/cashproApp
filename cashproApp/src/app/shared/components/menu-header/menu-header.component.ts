import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {

  toggle:boolean = false;

  hidden() {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
