import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeavyLoadersSlowComponent } from '../../../../shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [RouterModule, HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
})
export class DeferViewsComponent {
  constructor() {}
}
