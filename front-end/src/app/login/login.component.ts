import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginFailMessage: string = '';

  constructor(private loginService: LoginService,
    private router: Router,
    private localStorage: StorageService) { }

  ngOnInit(): void {
  }

  login(){
    console.log('login - ' + this.username + ':' + this.password);
    this.loginService.login(this.username, this.password).subscribe((user) => {
      const userDetails = {
        username: this.username
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      console.log('USER/ME: ');
      console.log(user);
      this.localStorage.set('authorization', btoa(this.username + ':' + this.password));
      this.router.navigate(['/home']);
    }, (error) => {
      this.loginFailMessage = 'Usuario ou senha invalidos. Tente novamente';
    });

  }}