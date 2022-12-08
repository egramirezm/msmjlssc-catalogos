package mx.gob.imss.cit.mjlssc.service;

import org.springframework.http.ResponseEntity;

public interface CatalogosService {

	ResponseEntity<?> getCatalogoSexo();

	ResponseEntity<?> getCatalogoUmf();

}
