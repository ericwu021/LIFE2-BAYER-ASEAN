import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreEnComponent } from './core-en/core-en.component';

const routes: Routes = [

  {path: '', component: CoreEnComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
