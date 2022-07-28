import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootwearComponent } from './footwear/footwear.component';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MenComponent } from './men/men.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'men',component:MenComponent},
  {path:'women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
