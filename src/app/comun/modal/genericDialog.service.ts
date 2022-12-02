import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Abogado } from '../model/catalogo.model';
import { HomeIncidenteModel } from '../model/incidente.model';

@Injectable({ providedIn: 'root' })
export class GenericDialogService {

    private dialogConfig = new MatDialogConfig();

    registroJucioLaboralNivelOoad(): MatDialogConfig {
        this.dialogConfig.restoreFocus = false;
        this.dialogConfig.autoFocus = false;
        this.dialogConfig.data = {
            title: "Concluir registro de juicio",
            subtitle: "En caso de continuar no podrá regresar al estado actual",
            message : "¿Deseas continuar?",
            cancelMessage: "Cancelar",
            confirmMessage: "Si, Continuar",
        }
        return this.dialogConfig;
    }


}
