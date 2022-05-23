import { Component, OnInit } from '@angular/core';
import {
  faQuestionCircle,
  faCalendarPlus,
  faComments,
  faIdCard,
  faUserCog,
  faAddressBook,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from 'src/app/authorization/services/authorization.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  boxOn?: boolean;
  menuOn?: number;
  prevMenu?: number;

  user: any;
  isAdmin?: boolean;
  isAsociado?: boolean;

  myMenu: any;

  constructor(private auth: AuthorizationService) {}

  ngOnInit() {
    let type = this.auth.getType();
    this.isAdmin = type === 'Administrador';
    this.isAsociado = type === 'Asociado';
    if (this.isAdmin) {
    } else if (this.isAsociado) {
      this.setAsociadoMenu();
    }
    this.setAdminMenu();
  }

  setAdminMenu() {
    this.myMenu = [
      {
        name: 'Lista de usuarios',
        link: '/dashboard',
        id: 0,
        icon: faUserCog,
      },
      {
        name: 'Editar Perfil',
        link: '/dashboard/perfil',
        id: 1,
        icon: faCalendarPlus,
      },
      {
        name: 'Oficina virtual',
        link: '/dashboard/asociados',
        id: 2,
        icon: faCalendarPlus,
      },
      {
        name: 'Árbol Genealógico',
        link: '/dashboard/asociados/arbol',
        id: 3,
        icon: faCalendarPlus,
      },
      {
        name: 'Capitalzar',
        link: '/dashboard/pagos',
        id: 4,
        icon: faCalendarPlus,
      },
      {
        name: 'Historial de pagos',
        link: '/dashboard/pagos/historial',
        id: 5,
        icon: faCalendarPlus,
      },
    ]; 
  }

  setAsociadoMenu() {
    this.myMenu = [
      {
        name: 'Editar Perfil',
        link: '/dashboard/administracion/perfil',
        id: 0,
        icon: faCalendarPlus,
      },
      {
        name: 'Oficina virtual',
        link: '/dashboard/asociados',
        id: 1,
        icon: faCalendarPlus,
      },
      {
        name: 'Árbol Genealógico',
        link: '/dashboard/asociados/arbol',
        id: 2,
        icon: faCalendarPlus,
      },
      {
        name: 'Capitalzar',
        link: '/dashboard/pagos',
        id: 3,
        icon: faCalendarPlus,
      },
      {
        name: 'Historial de pagos',
        link: '/dashboard/pagos/historial',
        id: 4,
        icon: faCalendarPlus,
      },
    ];
  }

  tMenu(event: any, item: any) {
    console.log('here');
    this.closeMenus();
    this.myMenu[item.id].class = {
      aBox: true,
    };
  }

  closeMenus() {
    this.myMenu.forEach((item: any) => {
      item.class = {
        aBox: false,
      };
    });
  }
}
