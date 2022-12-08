import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { API } from "../config/endpoints";
import { MockData } from "./mockdata";



@Injectable({ providedIn: 'root' })
export class CatalogoService{
    constructor(
        private http: HttpClient,
    ){
    }

  getJunta() {
    return of(MockData.mockJunta);
    //return this.http.post<any[]>(`${API.catalogos.junta}`, null);
  }

  getEstado() {
    return this.http.post<any[]>(`${API.catalogos.estado}`, null);
  }

  getMunicipio() {
    return this.http.post<any[]>(`${API.catalogos.municipioAlcaldia}`, null);
  }

  getDelegacion(){
    return this.http.post<any[]>(`${API.catalogos.delegacion}`, null)
  }

  getColonia(municipio) {
    return this.http.post<any[]>(`${API.catalogos.colonia}/${municipio}`, null);
  }


}
