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
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Toast,CardModule, ButtonModule,RouterModule,FormsModule,CommonModule, InputTextModule, FloatLabel, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  private router = inject(Router);
  loginData: loginInterface = {
    rollno: '',
    password: ''

  }
  disabled: boolean = false
  endpoint: string = 'auth/loginuser'
  constructor(private loginservice: LoginService, private messageService: MessageService){}
  showToast(type: string, message: string, summary: string) {
        this.messageService.add({ severity: type, summary: summary, detail: message });
    }
  submit(){
        this.disabled = true

    this.loginservice.getUser(this.loginData, this.endpoint).subscribe({
      next: (data)=>{
        this.showToast("success", "logged in!", "Success")
        var nav = setInterval(()=>{
          clearInterval(nav)
          this.router.navigate(['/'])
        }, 1000)

      },
      error: (err:any)=>{
        this.showToast("error", err.error.error,  "Error")
        console.log(err)
      }
    })
    console.log(this.loginData)
  }
}
