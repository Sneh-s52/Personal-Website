import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemeService } from '../services/dark-theme.service';
import { IconCloudComponent } from '../components/icon-cloud/icon-cloud.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconCloudComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  isDarkTheme: boolean;
  projects = [
    {
      title: 'TreadWill',
      description: 'TreadWill is a website designed to help individuals deal with stress, low mood, lethargy, and other depressive symptoms.... ',
      image: '/assets/assets/Scene.png',
      website: 'https://www.treadwill.org/',
      github: null,
    },
    {
      title: 'De-Fi Unchained',
      description: 'A DeFi project focused on designing and implementing a custom stablecoin using smart contracts, ensuring ....',
      image: '/assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/DeFi-Unchained-IITK',
    },
    {
      title: 'CodeBreak',
      description: 'A blend of coding (GitHub) and taking breaks with Pomodoro and Reddit.',
      image: 'assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/DeFi-Unchained-IITK',
    },
    {
      title: 'Personal Website',
      description: 'My personal website built on Angular Framework',
      image: '/assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/DeFi-Unchained-IITK',
    },
    {
      title: 'Price Co-Reversal',
      description: 'Empirical analysis on price co-reversal due to arbitrage activities on the publicly listed US Energy stocks',
      image: 'assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/Sneh-s52/Price-Co-Reversal',
    },
    {
      title: 'Mathematical Trading Strats',
      description: 'Implemented and optimised technical indicators alongwith automated detection of chart patterns',
      image: 'assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/Sneh-s52/Mathematical-Trading-Strategies',
    },
    {
      title: 'Bigram Word Predictor',
      description: 'Develop a machine learning algorithm to guess words from sorted, deduplicated bigrams, optimizing for precision',
      image: 'assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/Sneh-s52/CS771/tree/main/Bigram Word Predictor',
    },
    {
      title: 'COCO PUF',
      description: 'Investigate the security and predictability of a newly proposed Physical Unclonable Function (PUF) variant (COCO)',
      image: 'assets/assets/Scene.png',
      website: null,
      github: 'https://github.com/Sneh-s52/CS771/tree/main/COCO-PUF',
    },
  ];
  constructor(private themeService: DarkThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme.value;
  }

  ngOnInit() {
    this.themeService.themeState.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });
  }
}