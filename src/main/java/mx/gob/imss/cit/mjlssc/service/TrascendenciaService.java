/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service;

import org.springframework.http.ResponseEntity;

/**
 * @author
 *
 */
public interface TrascendenciaService {

	ResponseEntity<?> getTrascendencia();
	ResponseEntity<?> getTrascendenciaById(Long id);
	

}
