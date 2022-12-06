import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteGuardHelper } from 'src/app/comun/helper/routeGuard.helper';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from 'src/app/comun/shared-module/shared.module';
import { PagerModule } from 'src/app/comun/paginado/pager';
import { ActoresRoutingModule } from './actores-routing.module';
import { AdminActoresComponent } from './componets/admin-actores/admin-actores.component';
import { RegistroModule } from "../registro/registro.module";

@NgModule({
    declarations: [
        AdminActoresComponent
    ],
    exports: [],
    providers: [
        { provide: RouteGuardHelper }
    ],
    imports: [
        CommonModule,
        PortalModule,
        SharedModule,
        PagerModule,
        ActoresRoutingModule,
        RegistroModule
    ]
})
export class ActoresModule { }
