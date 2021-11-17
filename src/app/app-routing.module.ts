import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMasterComponent } from './client-master/client-master.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyWorkspaceComponent } from './my-workspace/my-workspace.component';

const routes: Routes = [
    {
      path:"home",
      component:HomepageComponent
    },
    {
      path:"client_master",
      component:ClientMasterComponent
    },
    {
      path:"my_workspace",
      component:MyWorkspaceComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
