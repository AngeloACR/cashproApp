import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
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
  errorMsg: string = '';
  showError = { errorAct: false };

  view: number = 3;
  width: number = 0;
  screen: boolean = false;

  constructor(
    private router: Router, 
    private auth: AuthorizationService
  ) {}

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

  setBirthday(e: any): void {
    this.birthday = e.target.value;
  }

  siguiente(): void {
    this.view ++;
  }

  volver(): void {
    this.view --;
  }

  async registrar() {
    var data = {
      names: this.names,
      lastnames: this.lastnames,
      identification: this.identification,
      birthday: this.birthday,
      phone: this.phone,
      address: this.address,
      email: this.email,
      username: this.username,
      password: this.password,
      type: 'Administrador',
    };
    console.log(data);
    if (this.catchUserErrors()) {
      let errorMsg =
        'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
      console.log(errorMsg);
      this.openError(errorMsg);
    } else {
      this.auth.register(data).subscribe((registerData: any) => {
        if (!registerData.status) {
          let errorMsg = registerData.msg;
          this.openError(errorMsg);
        } else {
          /* MOSTRAR CONFIRMACION */
          this.router.navigateByUrl('auth');
        }
      });
    }
  }
  catchUserErrors() {
    let namesAux = this.names != '' ? true : false;
    let lastnamesAux = this.lastnames != '' ? true : false;
    let identificationAux = this.identification != '' ? true : false;
    let birthdayAux = this.birthday != null ? true : false;
    let phoneAux = this.phone != '' ? true : false;
    let addressAux = this.address != '' ? true : false;
    let emailAux = this.email != '' ? true : false;
    let usernameAux = this.username != '' ? true : false;
    let passwordAux = this.password != '' ? true : false;
    let cpasswordAux = this.cpassword != '' ? true : false;
    let error =
      !namesAux ||
      !lastnamesAux ||
      !identificationAux ||
      !birthdayAux ||
      !phoneAux ||
      !addressAux ||
      !emailAux ||
      !usernameAux ||
      !passwordAux ||
      !cpasswordAux;
    console.log(error);
    return error;
  }
  openError(msg: string) {
    this.errorMsg = msg;
    this.showError = {
      errorAct: true,
    };
  }

  closeError() {
    this.showError = {
      errorAct: false,
    };
  }
}
