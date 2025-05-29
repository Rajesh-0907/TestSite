import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { loginInterface } from '../../types';
import { LoginService } from '../../services/login.service';
import { environment } from '../../../environments/environment';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ButtonModule,RouterModule,FormsModule,CommonModule, InputTextModule, FloatLabel, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  loginData: loginInterface = {
    rollno: '',
    password: ''

  }
  endpoint: string = 'auth/loginuser'
  constructor(private loginservice: LoginService){}

  submit(){
    this.loginservice.getUser(this.loginData, this.endpoint).subscribe({
      next: (data)=>{
        this.router.navigate(['/'])
      },
      error: (err)=>console.log(err)
    })
    console.log(this.loginData)
  }
}
