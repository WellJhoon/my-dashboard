import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
})
export class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal('A');
  public frameworks = signal(['angular', 'vue', 'react', 'svelt', 'flutter']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
