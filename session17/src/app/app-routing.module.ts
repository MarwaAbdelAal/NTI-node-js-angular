import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "all/:id", component:SingleComponent},
  {path: "user/register", component:RegisterComponent},
  {path: "user/login", component:LoginComponent},
  {path: "user/single/:id", component:SingleuserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
