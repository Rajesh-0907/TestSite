import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { CounterService } from '../../services/counter.service';
@Component({
  selector: 'app-score',
  standalone: true,
  imports: [KnobModule, CommonModule, FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {
  count! : Signal<number>
  color!: Signal<string>
  constructor(private counterService : CounterService){
    this.count = this.counterService.count
    this.color = this.counterService.color
  }
 
  

}
