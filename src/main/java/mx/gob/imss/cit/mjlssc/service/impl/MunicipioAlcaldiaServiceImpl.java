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
import mx.gob.imss.cit.mjlssc.model.assembler.MunicipioAlcaldiaMapper;

import mx.gob.imss.cit.mjlssc.model.entity.MunicipioAlcaldiaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.MunicipioAlcaldia;
import mx.gob.imss.cit.mjlssc.persistence.repository.MunicipioAlcaldiaRepository;

import mx.gob.imss.cit.mjlssc.service.MunicipioAlcaldiaService;

/**
 * @author
 *
 */
@Log4j2
@Service
public class MunicipioAlcaldiaServiceImpl implements MunicipioAlcaldiaService {

	@Autowired
	private MunicipioAlcaldiaMapper municipioAlcaldiaMapper;
	@Autowired
	private MunicipioAlcaldiaRepository municipioRepository;

	


	@Override
	public ResponseEntity<?> findByCveEstadoNomMunicipioAlcaldias(Long cveEstado) {
		log.info("Inicio MunicipioAlcaldias findByCveEstadoNomMunicipioAlcaldias");
		List<MunicipioAlcaldiaDto> municipiosDtos = new ArrayList<>();
		try {
			
			List<MunicipioAlcaldia> municipios = municipioRepository.findByCveEstadoOrderByRefNomMunicipioAlcaldia(cveEstado);
					municipiosDtos =municipioAlcaldiaMapper.toLstDto(municipios);
		} catch (Exception e) {
			log.error("Exception Municipio Services findByCveEstadoNomMunicipioAlcaldias", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(municipiosDtos, HttpStatus.OK);
	}


}
