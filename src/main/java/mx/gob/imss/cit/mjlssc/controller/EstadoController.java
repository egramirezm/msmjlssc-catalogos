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
import mx.gob.imss.cit.mjlssc.service.EstadoService;

/***
 * 
 * @author
 *
 */
@Log4j2
@RestController
@RequestMapping("/estado")
public class EstadoController {

	@Autowired
	private EstadoService estadoService;

	@GetMapping("/")
	public ResponseEntity<?> get() {
		log.info("Inicio consulta de Estados ");
		return estadoService.getEstados();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getById(@PathVariable Long id) {
		log.info("Inicio consulta de Estados  by id");
		return estadoService.getEstadoById(id);
	}

}
