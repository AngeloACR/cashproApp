import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  names?: string;
  lastnames?: string;
  identification?: string;
  birthday?: Date;
  phone?: string;
  address?: string;
  email?: string;
  username?: string;
  password?: string;
  cpassword?: string;
  terminos?: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  async registrar(){
    this.router.navigateByUrl('auth')
  }

}
