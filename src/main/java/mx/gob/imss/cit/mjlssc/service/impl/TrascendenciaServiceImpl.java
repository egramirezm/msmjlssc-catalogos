/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;
import mx.gob.imss.cit.mjlssc.model.assembler.TrascendenciaMapper;
import mx.gob.imss.cit.mjlssc.model.entity.SsccTrascendenciaDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.SsccTrascendencia;
import mx.gob.imss.cit.mjlssc.persistence.repository.TrascendenciaRepository;
import mx.gob.imss.cit.mjlssc.service.TrascendenciaService;

/**
 * @author
 *
 */
@Log4j2
@Service
public class TrascendenciaServiceImpl implements TrascendenciaService {

	@Autowired
	private TrascendenciaMapper trascendenciaMapper;

	@Autowired
	private TrascendenciaRepository trascendenciaRepository;

	@Override
	public ResponseEntity<?> getTrascendencia() {
		log.info("Inicio Trascendencia getTrascendencia");
		List<SsccTrascendenciaDto> trascendenciaDtos = new ArrayList<>();
		try {
			List<SsccTrascendencia> trascendencia = trascendenciaRepository.findAll();
			trascendenciaDtos = trascendenciaMapper.toLstDto(trascendencia);
		} catch (Exception e) {
			log.error("Exception SsccTrascendenciaService getTrascendencia", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(trascendenciaDtos, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<?> getTrascendenciaById(Long id) {
		log.info("Inicio SsccTrascendencias getSsccTrascendenciaById");
		SsccTrascendenciaDto trascendenciaDTO = new SsccTrascendenciaDto();
		try {
			Optional<SsccTrascendencia> trascendencoiaOpt = trascendenciaRepository.findById(id);
			if (trascendencoiaOpt.isPresent()) {
				SsccTrascendencia trascendencia = trascendencoiaOpt.get();
				trascendenciaDTO = trascendenciaMapper.toDto(trascendencia);
			}

		} catch (Exception e) {
			log.error("Exception SsccTrascendenciaService getSsccTrascendenciaById", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(trascendenciaDTO, HttpStatus.OK);
	}

}
