import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="text text-3xl 5-mb">Change Detection</h1>

    <pre>{{ frameWorkAsSignal() | json }}</pre>
    <pre>{{ frameWorkAsProperty | json }}</pre>
  `,
})
export class ChangeDetectionComponent {
  public frameWorkAsSignal = signal({
    name: 'Angular',
    relaseDate: '2016',
  });

  public frameWorkAsProperty = {
    name: 'Angular',
    relaseDate: '2016',
  };

  constructor() {
    setTimeout(() => {
      this.frameWorkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Terminado');
    }, 3000);
  }
}
