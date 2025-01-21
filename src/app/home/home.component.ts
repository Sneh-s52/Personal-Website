import { Component, OnInit } from '@angular/core';
import  {DarkThemeService} from '../services/dark-theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  strings: string[] = ['Hello!', 'नमस्ते!']; 
  displayedText: string = ''; 
  currentStringIndex: number = 0; 
  typingSpeed: number = 250; 
  deletingSpeed: number = 200; 
  pauseDuration: number = 500;

  isDarkTheme: boolean;
  constructor(private themeService: DarkThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }
  ngOnInit() {
    this.themeService.themeState.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
    this.startTypingEffect();
  }
  startTypingEffect() {
    const currentString = this.strings[this.currentStringIndex];
    let i = 0;

    const type = () => {
      if (i < currentString.length) {
        this.displayedText += currentString[i];
        i++;
        setTimeout(type, this.typingSpeed);
      } else {
        setTimeout(() => this.startDeletingEffect(), this.pauseDuration);
      }
    };

    type();
  }

  startDeletingEffect() {
    const deleteText = () => {
      if (this.displayedText.length > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        setTimeout(deleteText, this.deletingSpeed);
      } else {
        this.currentStringIndex =
          (this.currentStringIndex + 1) % this.strings.length;
        setTimeout(() => this.startTypingEffect(), this.pauseDuration);
      }
    };

    deleteText();
  }
}