import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

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

  constructor(public auth: AuthorizationService) { }

  ngOnInit(): void {
  }

}
