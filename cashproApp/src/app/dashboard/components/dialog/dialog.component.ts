import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  view: number = 3;
  width: number = 0;
  screen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  comprobarScreen(width:number) {
    if(width > 768) {
      this.screen = true;
    } else {
      this.screen = false;
      this.view = 0;
    }
  }

  siguiente(): void {
    this.view ++;
  }

  volver(): void {
    this.view --;
  }

}
