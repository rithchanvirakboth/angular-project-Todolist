import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './components/show/show.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
