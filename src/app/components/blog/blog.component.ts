import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
@Component({
  selector: 'app-blog',
  imports: [EditorModule, FormsModule],
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  text = ""
}
