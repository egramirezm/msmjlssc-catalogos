import { environment } from 'src/environments/environment';

export const API = {

  seguridad: {
    oauth: environment.apiNmlsscSeguridad + '/v1/oauth/token',
  },
  catalogos: {
    
    colonia: environment.apiJlsscCatalogos + '/v1/colonia',
    municipioAlcaldia: environment.apiJlsscCatalogos + '/v1/municipio',
    estado: environment.apiJlsscCatalogos + '/v1/estado',
    
  },
  sscHome: environment.sscHome + '/inicio',
  sscLogin: environment.sscHome + '/login',

}
