import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>hola mundo</h1>`,
})
export class HeavyLoadersSlowComponent {
  constructor() {
    console.log('Hola mundo Slow');
  }
}
