import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HomeComponent } from './home/home.component';
import { MyappComponent } from './myapp/myapp.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'lifeCycle',component:LifecycleComponent},
  {path:'myApp',component:MyappComponent},
  {path:'practice',component:PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
