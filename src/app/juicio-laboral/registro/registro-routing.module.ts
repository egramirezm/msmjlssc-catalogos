import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NAV } from "src/app/comun/config/global";
import { ROLE } from "src/app/comun/helper/role.helper";
import { JuiciosLaboralesOoadComponent } from "./components/juicios-laborales-ooad/juicios-laborales-ooad.component";
import { NotificacionBaseComponent } from "./components/notificacion-base/notificacion-base.component";

const routes: Routes = [
  {
    path: NAV.registroNotificacionBase,
    component: NotificacionBaseComponent,
    data: {
      allowedRoles: [],
      excluirGobMx: false
    }
  },
  {
    path: NAV.registroJuicioLaboralOoad,
    component: JuiciosLaboralesOoadComponent,
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
export class RegistroRoutingModule { }
