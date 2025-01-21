import { Component } from '@angular/core';
import { BlogSearchComponent } from '../components/blog-search/blog-search.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogSearchComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
