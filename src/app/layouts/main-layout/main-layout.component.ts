import { Component, inject, Signal, ViewChild } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { UserService } from '../../services/user.service';
import { ChipModule } from 'primeng/chip';
import { Popover, PopoverModule } from 'primeng/popover';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,ChipModule,PopoverModule, ButtonModule, ToolbarModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
   @ViewChild('op') op!: Popover;
   private router = inject(Router)
  name! : Signal<string>
  endpoint: string = "api/logoutuser"
  constructor(private userservice : UserService, private logoutservice: LogoutService){
    this.name = this.userservice.name
  }
   toggle(event:any) {
        this.op.toggle(event);
    }

    logout(){
      this.logoutservice.logoutUser(this.endpoint).subscribe({
        next: (data)=>{
          window.location.reload()
      },
      error: (err)=>console.log(err)
      })

      console.log("logged out")
    }
}
