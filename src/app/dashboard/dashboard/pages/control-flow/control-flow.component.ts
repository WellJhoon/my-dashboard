import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
})
export class ControlFlowComponent {
  public showContent = signal(true);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
