import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.scss']
})
export class RecuperarComponent implements OnInit {

  email: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  async recuperar(){
    this.router.navigateByUrl('auth')    
    
  }

}
