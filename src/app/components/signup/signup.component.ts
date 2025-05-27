import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone:true,
    imports: [CardModule, ButtonModule,RouterModule, InputTextModule, FloatLabel, PasswordModule],

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
