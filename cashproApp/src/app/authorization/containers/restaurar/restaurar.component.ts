import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.component.html',
  styleUrls: ['./restaurar.component.scss']
})
export class RestaurarComponent implements OnInit {
  password?: string
  cpassword?: string
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  async restaurar(){
    this.router.navigateByUrl('auth')    
    
  }

}
