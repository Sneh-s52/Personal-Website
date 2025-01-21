import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DarkThemeService } from '../../services/dark-theme.service';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.scss'
})
export class BlogSearchComponent implements OnInit{
  isDarkTheme: boolean;
  constructor(private themeService: DarkThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }
  ngOnInit() {
    this.themeService.themeState.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
    this.filteredBlogs = this.blogs;
  }
  blogs = [
    { title: 'Angular Basics', description: 'Learn the fundamentals of Angular.' },
    { title: 'Advanced Angular', description: 'Dive deeper into Angular concepts.' },
    { title: 'RxJS in Angular', description: 'Understand how to use RxJS effectively.' },
    { title: 'Angular Forms', description: 'Master template-driven and reactive forms.' },
  ];

  searchTerm: string = ''; 
  filteredBlogs: any[] = []; 
  filterBlogs() {
    this.filteredBlogs = this.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
