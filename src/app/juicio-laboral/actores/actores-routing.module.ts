import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NAV } from "src/app/comun/config/global";
import { AdminActoresComponent } from "./componets/admin-actores/admin-actores.component";

const routes: Routes = [
  {
    path: NAV.actores,
    component: AdminActoresComponent,
    data: {
      allowedRoles: [],
      excluirGobMx: false
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
