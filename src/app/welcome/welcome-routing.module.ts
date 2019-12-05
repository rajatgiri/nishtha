import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const nishtha_routes: Routes = [
    {
        path: '',
        component : WelcomeComponent
    },
    {
        path: 'nrg',
        loadChildren:()=> import('../nrg/nrg.module').then(m=> m.NrgModule),
        data: { title: 'National Resource Group'}
    },
    {
        path: 'srg',
        loadChildren:()=> import('../srg/srg.module').then(m => m.SrgModule),
        data: { preload : true }
    },
    {
        path: 'others',
        loadChildren:()=> import('../others/others.module').then(m=>m.OthersModule)
    }
];

@NgModule({
  imports: [RouterModule.forChild(nishtha_routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
