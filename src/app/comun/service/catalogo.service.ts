import { Injectable } from '@angular/core';
import { Estado,Municipio,Colonia } from '../model/catalogo.model';
import { API } from "../config/endpoints";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(  private http: HttpClient,
    private spinner: NgxSpinnerService,) { }


  getEstado() {
  
    return this.http.get<Array<Estado>>(`${API.catalogos.estado}/`,
    {
      headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Authorization', 'Basic bm1sc3NjQXBwOjEyMzQ1Ng==')
          .set('Authorization','Bearer '+ 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGVsbGlkb1BhdGVybm8iOiJNQUkiLCJ1c3VhcmlvTGlzdCI6W3siY3ZlUGVyZmlsIjoyLCJkZXNQZXJmaWwiOiJBQk9HQURPIiwiY3ZlVXN1YXJpbyI6MTk5MH1dLCJ1c2VyX25hbWUiOiJJTlRFR1JBQ0lPTi5NQUkiLCJjdmVQZXJzb25hIjoyMjQwLCJubWwiOjEsIm5vbWJyZSI6IklOVEVHUkFDSU9OIiwiY2xpZW50X2lkIjoibm1sc3NjQXBwIiwiYXBlbGxpZG9NYXRlcm5vIjoiVEVTVCIsImRlbGVnYWNpb24iOnsiY3ZlRGVsZWdhY2lvbiI6MTEsImN2ZVVzdWFyaW9BbHRhIjoiVVNSX0NBUkdBX01BTlVBTCIsImN2ZVVzdWFyaW9CYWphIjpudWxsLCJjdmVVc3VhcmlvTW9kaWZpY2EiOm51bGwsImRlc0RlbGVnYWNpb24iOiJHVUFOQUpVQVRPIiwiZmVjQWx0YSI6MTYxODQwNzQzMzAwMCwiZmVjQmFqYSI6bnVsbCwiZmVjTW9kaWZpY2EiOm51bGwsInJlZkFicmV2aWFjaW9uIjoiR1RPIn0sInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJjb3JyZW8iOiJicmF5YW4uaGVybmFuZGV6QHNvZnR0ZWsuY29tIiwiZXhwIjoxNjcwNDYyMTU4LCJqdGkiOiI2YjU2ZDc5MS1lNzkzLTQ5ZjEtYWM4My1lYjRhYzZjNzY2ZDcifQ.HNegYdf02SBmqmRw3v17aMh3--b9kewpCj4Zux6qiHg')
    }
    );
  }

  getMunicipio(cveEstado) {
    return this.http.post<any[]>(`${API.catalogos.municipioAlcaldia}/${cveEstado}`, null);
  }

  getColonia(cveMunicipio) {
    return this.http.post<any[]>(`${API.catalogos.colonia}/${cveMunicipio}`, null);
  }
}
