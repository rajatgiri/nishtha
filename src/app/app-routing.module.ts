import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading';


const nishtha_routes: Routes = [
  { 
    path: '',
      loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: '**',
    redirectTo : ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(nishtha_routes, { preloadingStrategy : CustomPreloadingStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
