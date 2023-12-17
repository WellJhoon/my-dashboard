import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './defer-views.component.html',
})
export class DeferViewsComponent {
  constructor() {}
}
