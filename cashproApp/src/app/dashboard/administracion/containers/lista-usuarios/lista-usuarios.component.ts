import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  correo: string;
  estatus: string;
  visitar_arbol: string;
  deshabilitar: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    nombre: 'Junior Calzadilla', 
    correo: 'ft94juniorecalzadilla@gmail.com', 
    estatus: 'Asociado A', 
    visitar_arbol: '',
    deshabilitar: true
  }, 
  {
    nombre: 'Roger Freites', 
    correo: 'RogerFreites@gmail.com', 
    estatus: 'Asociado A', 
    visitar_arbol: '',
    deshabilitar: false
  },
  {
    nombre: 'Maria Almeida', 
    correo: 'MariaAlmeida@gmail.com', 
    estatus: 'Asociado A', 
    visitar_arbol: '',
    deshabilitar: true
  },
  {
    nombre: 'John Ramirez', 
    correo: 'JohnRamirez@gmail.com', 
    estatus: 'Asociado A', 
    visitar_arbol: '',
    deshabilitar: true
  }
];
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'correo', 'estatus', 'visitar_arbol', 'deshabilitar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
