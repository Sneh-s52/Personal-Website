import { Component, OnInit} from '@angular/core';
import { DarkThemeService } from '../services/dark-theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  isDarkTheme: boolean;
  constructor(private themeService: DarkThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }
  ngOnInit() {
    this.themeService.themeState.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }

}
