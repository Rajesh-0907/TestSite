import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { questionInterface } from '../../types';
import { QuestionService } from '../../services/question.service';
import { ScoreService } from '../../services/score.service';
import { KnobModule } from 'primeng/knob';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Router } from '@angular/router';
import { CounterService } from '../../services/counter.service';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-test',
  standalone:true,
  imports: [SkeletonModule,ProgressSpinnerModule, KnobModule, ButtonModule, PanelModule, RadioButtonModule,CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent implements OnInit {

    private router = inject(Router);
  @Input() questionendpoint!: string
  @Input() answerendpoint! : string
  answers : string[]= ["", "", "", "", "", "", "", "", "", ""]
  score: number = 0
  color: string = "yellow"
  temp : number[] = [0, 1,2,3,4,5,6,7,8,9]
  dataLoaded : boolean = false
  questions : questionInterface[]=[]
  constructor(private questionService: QuestionService,
    private scoreService : ScoreService,
    private counterService : CounterService
  ){}

  ngOnInit(): void {

    this.questionService.getQuestions(this.questionendpoint).subscribe({
      next: (data)=>{
        this.questions = data
        this.dataLoaded = true
        
      },
      error: (err)=> {
        console.log(err)
        this.dataLoaded = false
        }
      
    })
    // this.questionService.getQuestions().subscribe(data=>{
    //   console.log(data)
    // })
  }
  submit(){
    this.scoreService.getScore(this.answers, this.answerendpoint ).subscribe(
      data=>{
        this.score=data
        if(data <= 3){
      this.color = "red"
    }
    else if(data >=4 && data  <=7){
      this.color = "yellow"
    }
    else{
      this.color = "#42f5b9"
    }
        
      }
    )
     console.log(this.answers)
     this.router.navigate(['/score'])

  }

}

