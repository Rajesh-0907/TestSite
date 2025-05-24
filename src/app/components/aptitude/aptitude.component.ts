import { Component } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-aptitude',
  imports: [DialogModule, ButtonModule, TagModule],
  standalone: true,
  templateUrl: './aptitude.component.html',
  styleUrl: './aptitude.component.css'
})
export class AptitudeComponent {
      visible : boolean = true
      constructor(){
        this.visible = true
      }
}
