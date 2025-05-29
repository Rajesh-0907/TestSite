import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { studentsInterface } from '../../types';
@Component({
  selector: 'app-home',
  imports: [TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
