import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 class="text text-3xl mb-5">Control Flow</h1> `,
})
export class TitleComponent {
  constructor() {}
}
