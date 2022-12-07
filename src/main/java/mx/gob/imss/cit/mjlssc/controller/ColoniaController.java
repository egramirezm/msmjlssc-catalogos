/**
 * 
 */
package mx.gob.imss.cit.mjlssc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.log4j.Log4j2;
import mx.gob.imss.cit.mjlssc.service.ColoniaService;
import mx.gob.imss.cit.mjlssc.service.MunicipioAlcaldiaService;

/***
 * 
 * @author
 *
 */
@Log4j2
@RestController
@RequestMapping("/colonia")
public class ColoniaController {

	@Autowired
	private ColoniaService coloniaService;


	
	@GetMapping("/{cveMunicipio}")
	public ResponseEntity<?> getById(@PathVariable Long cveMunicipio) {
		log.info("Inicio consulta de Colonias  by cveMunicipio");
		return coloniaService.findByCveMunicipioAlcaldiaRefNomColoniaCp(cveMunicipio);
	}

}
