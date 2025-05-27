import { Component, Signal, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { UserService } from '../../services/user.service';
import { ChipModule } from 'primeng/chip';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet,ChipModule,PopoverModule, ButtonModule, ToolbarModule, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
   @ViewChild('op') op!: Popover;
  name! : Signal<string>
  constructor(private userservice : UserService){
    this.name = this.userservice.name
  }
   toggle(event:any) {
        this.op.toggle(event);
    }
}
