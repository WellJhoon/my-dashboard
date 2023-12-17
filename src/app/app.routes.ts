import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard/pages/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/dashboard/pages/change-detection/change-detection.component'
          ).then((c) => c.ChangeDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import(
            './dashboard/dashboard/pages/control-flow/control-flow.component'
          ).then((c) => c.ControlFlowComponent),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/dashboard/pages/defer-options/defer-options.component'
          ).then((c) => c.DeferOptionsComponent),
      },
      {
        path: 'defer-view',
        title: 'Defer View',
        loadComponent: () =>
          import(
            './dashboard/dashboard/pages/defer-views/defer-views.component'
          ).then((c) => c.DeferViewsComponent),
      },
      {
        path: 'user',
        title: 'User',
        loadComponent: () =>
          import('./dashboard/dashboard/pages/user/user.component').then(
            (c) => c.UserComponent
          ),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () =>
          import('./dashboard/dashboard/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'view-transition',
        title: 'View Transition',
        loadComponent: () =>
          import(
            './dashboard/dashboard/pages/view-transition/view-transition.component'
          ).then((c) => c.ViewTransitionComponent),
      },
      {
        path: '',
        redirectTo: 'control-flow',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
