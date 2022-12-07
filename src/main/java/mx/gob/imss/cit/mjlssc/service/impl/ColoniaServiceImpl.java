/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;
import mx.gob.imss.cit.mjlssc.model.assembler.ColoniaMapper;
import mx.gob.imss.cit.mjlssc.model.entity.ColoniaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.Colonia;
import mx.gob.imss.cit.mjlssc.persistence.repository.ColoniaRepository;
import mx.gob.imss.cit.mjlssc.service.ColoniaService;

/**
 * @author
 *
 */
@Log4j2
@Service
public class ColoniaServiceImpl implements ColoniaService {

	@Autowired
	private ColoniaMapper coloniaMapper;
	@Autowired
	private ColoniaRepository coloniaRepository;


	@Override
	public ResponseEntity<?> findByCveMunicipioAlcaldiaRefNomColoniaCp(Long cveMunicipio) {
		log.info("Inicio Colonia findByCveMunicipioAlcaldiaRefNomColoniaCp");
		List<ColoniaDto> coloniaDtos = new ArrayList<>();
		try {
			
			List<Colonia> colonias = coloniaRepository.findByCveMunicipioAlcaldiaOrderByRefNomColoniaCp(cveMunicipio);
			coloniaDtos =coloniaMapper.toLstDto(colonias);
		} catch (Exception e) {
			log.error("Exception Colonia Services findByCveMunicipioAlcaldiaRefNomColoniaCp", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(coloniaDtos, HttpStatus.OK);
	}


}
