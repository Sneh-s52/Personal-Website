import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-cloud',
  templateUrl: './icon-cloud.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./icon-cloud.component.scss'],
})
export class IconCloudComponent implements OnInit, AfterViewInit {
  icons: string[] = [
    '/assets/assets/javascript.svg',
    '/assets/assets/typescript.svg',
    '/assets/assets/angular-b.svg',
    '/assets/assets/html.svg',
    '/assets/assets/css.svg',
    '/assets/assets/docker.svg',
    '/assets/assets/git.svg',
    '/assets/assets/python.png',
    '/assets/assets/solidity.svg',
    '/assets/assets/C++.svg',
  ];
  ngOnInit(): void {
  }
  private rotationX = 0;
  private rotationY = 0;
  private mouseX = 0;
  private mouseY = 0;
  private mouseActive = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const container = this.elementRef.nativeElement.querySelector('.icon-cloud');
    const items = Array.from(container.children) as HTMLElement[];

    const radius = 100; 
    const total = items.length;

    items.forEach((item, index) => {
      const phi = Math.acos(-1 + (2 * index) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    });
    container.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left - rect.width / 2;
      this.mouseY = e.clientY - rect.top - rect.height / 2;

      this.mouseActive = true;
    });

    container.addEventListener('mouseleave', () => {
      this.mouseActive = false;
    });
    const animate = () => {
      if (this.mouseActive) {
        const speed = 0.07; // Rotation speed
        this.rotationY += this.mouseX * speed;
        this.rotationX -= this.mouseY * speed;
      }

      container.style.transform = `rotateX(${this.rotationX}deg) rotateY(${this.rotationY}deg)`;
      requestAnimationFrame(animate);
    };

    animate();
    items.forEach((item) => {
      item.addEventListener('click', () => {
        items.forEach((i) => i.style.zIndex = '0'); 
        item.style.transform = `${item.style.transform} translateZ(150px)`; 
        item.style.zIndex = '1';
      });
    });
  }
}