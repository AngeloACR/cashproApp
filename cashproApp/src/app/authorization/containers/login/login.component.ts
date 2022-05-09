import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  password: string = '';
  recordarme: string = '';
  email: string = '';
  errorMsg: string = '';
  showError = { errorAct: false };
  constructor(private router: Router, private auth: AuthorizationService) {}

  ngOnInit(): void {}

  async login() {
    if (this.catchUserErrors()) {
      debugger
      let errorMsg =
        'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo';
      this.openError(errorMsg);
    } else {
      var data = { email: this.email, password: this.password };
      this.auth.login(data).subscribe((logData: any) => {
        if (!logData.status) {
          let errorMsg = logData.msg;
          this.openError(errorMsg);
        } else {
          this.auth.storeData(logData.token, true);
          this.router.navigateByUrl('dashboard');
        }
      });
    }
  }

  recuperarPassword() {
    this.router.navigateByUrl('auth/recuperar');
  }

  catchUserErrors() {
    let aux1 = this.email == '' ? true : false;
    let aux2 = this.password == '' ? true : false;
    let error = aux1 || aux2;
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
