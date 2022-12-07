/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service;

import org.springframework.http.ResponseEntity;

/**
 * @author
 *
 */
public interface ColoniaService {
	ResponseEntity<?> findByCveMunicipioAlcaldiaRefNomColoniaCp(Long cveMunicipio);
	
}
