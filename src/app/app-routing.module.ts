import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExceriseComponent } from './excerise/excerise.component';
import { FillComponent } from './fill/fill.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:ExceriseComponent},
  {path:'form',component:FillComponent},
  {path:'reg',component:RegisterComponent},
  {path:'log',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
