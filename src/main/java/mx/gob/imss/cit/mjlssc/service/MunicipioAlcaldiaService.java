/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service;

import org.springframework.http.ResponseEntity;

/**
 * @author
 *
 */
public interface MunicipioAlcaldiaService {

	ResponseEntity<?> findByCveEstadoNomMunicipioAlcaldias(Long cveEstado);

}
