import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SurveyAddComponent } from './survey/survey-add/survey-add.component';
import { SurveyListComponent } from './survey/survey-list/survey-list.component';


const routes: Routes = [
  {path:'auth', component: AuthComponent},
  {path:'survey-list', component: SurveyListComponent},
  {path:'survey-add', component: SurveyAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
