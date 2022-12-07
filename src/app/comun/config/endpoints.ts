import { environment } from 'src/environments/environment';

export const API = {

  seguridad: {
    oauth: environment.apiNmlsscSeguridad + '/v1/oauth/token',
  },
  catalogos:{
    colonia: environment.apiJlsscCatalogos + '/v1/coloniaByMunicipioCatalog',
    municipioAlcaldia: environment.apiJlsscCatalogos + '/v1/municipioAlcaldiaCatalog',
    estado: environment.apiJlsscCatalogos + '/v1/estadoCatalog',
    delegacion : environment.apiJlsscCatalogos + '/v1/delegacionCatalog',
    junta: environment.apiJlsscCatalogos + '/v1/juntaCatalog',
  },
  sscHome: environment.sscHome + '/inicio',
  sscLogin: environment.sscHome + '/login',

}
