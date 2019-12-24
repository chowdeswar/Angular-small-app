import { Component, OnInit } from '@angular/core';
import { Form } from './form';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {
  form: Form;
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
    this.form = new Form();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit() {
    console.log('Login component is initialized...')
    if(localStorage.getItem('userData')){
      this.router.navigate(['/'])
    }
  }

  doLogin() {
    console.log(this.loginForm.value)
    const loginData = this.userService.doLogin(this.loginForm.value);
    this.successData(loginData);
  }

  successData(data: any) {
    if(data.code == 200) {
      alert(data.message)
      localStorage.setItem('userData', JSON.stringify(data.data));
      this.router.navigate(['/']);
    } else {
      alert(data.message);
    }
  }

}
