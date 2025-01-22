import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DarkThemeService } from './services/dark-theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Sneh Sinha';
  isHomePage: boolean = false;
  public isDarkTheme = false;
  constructor(private router: Router, private themeService: DarkThemeService) {}
  ngOnInit() {
    this.themeService.loadTheme();
    this.themeService.themeState.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (this.router.url === '/');
      }
    });
  }
}
