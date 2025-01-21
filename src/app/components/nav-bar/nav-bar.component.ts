import { Component,OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkThemeService } from '../../services/dark-theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  isHomePage: boolean = false;
  renderer: any;
  isDarkTheme: boolean = false;
  constructor(private router: Router,private themeService: DarkThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }
  toggleTheme(): void {
    console.log(this.themeService.isDarkTheme.value);
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme.value;
    console.log(this.themeService.isDarkTheme.value);
  }
  ngOnInit() {
    this.themeService.isDarkTheme.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }
 
}
