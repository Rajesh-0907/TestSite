import { Component, Signal } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ppe',
  standalone: true,
  imports: [TestComponent, CommonModule, DialogModule, RouterModule, ButtonModule],
  templateUrl: './ppe.component.html',
  styleUrl: './ppe.component.css'
})
export class PpeComponent {
  issubmitted! : Signal<boolean>
  visible!: boolean
  score!:boolean
  constructor(private userservice: UserService){
    this.issubmitted = this.userservice.issubmitted
    this.visible = this.issubmitted()
  }
}
