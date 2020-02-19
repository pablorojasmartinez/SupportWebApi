import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/components/Issue/list/list.component';


const routes: Routes = [

  { path: '', redirectTo: 'Issue', pathMatch: 'full' },
  { path: 'Issue', component: ListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
