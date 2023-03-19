import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  },
  {
    path: 'login',
    loadChildren: ()=> import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'test',
    loadChildren: ()=> import('./test/test.module').then(m => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
