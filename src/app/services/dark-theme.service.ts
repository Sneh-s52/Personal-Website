import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

  public isDarkTheme = new BehaviorSubject<boolean>(false);
  constructor() { }
  themeState = this.isDarkTheme.asObservable();

  toggleTheme(): void {
    this.isDarkTheme.next(!this.isDarkTheme.value); 
    localStorage.setItem('theme', this.isDarkTheme.value ? 'dark' : 'light');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme.next(savedTheme === 'dark');
  }
}
