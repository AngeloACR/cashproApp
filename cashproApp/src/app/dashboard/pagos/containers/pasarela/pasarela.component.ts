import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss']
})
export class PasarelaComponent implements OnInit {
  
  view: number = 2;
  width: number = 0;
  screen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.width = screen.width;
    this.comprobarScreen(this.width);
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
