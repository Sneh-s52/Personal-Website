import { Component, OnInit } from '@angular/core';
import { DarkThemeService } from '../services/dark-theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
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
  sendMail() {
    const email = 'sneh.sinha2021@gmail.com'; 
    window.location.href = `mailto:${email}?`;
  }
}
