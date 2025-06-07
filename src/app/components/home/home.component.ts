import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { studentsInterface, TopScoreInterface } from '../../types';
import { TopScoreService } from '../../services/topscore.service';
@Component({
  selector: 'app-home',
  imports: [TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  topscore! : TopScoreInterface[]
  endpoint:string = "topscore"
  constructor(private topscoreservice: TopScoreService){}
  ngOnInit(): void {
    this.topscoreservice.getTopScore(this.endpoint).subscribe({
      next: (data:any)=>{
        this.topscore = data
        
      },
      error: (err)=> {
        console.log(err)
        }
    })
  }
}
