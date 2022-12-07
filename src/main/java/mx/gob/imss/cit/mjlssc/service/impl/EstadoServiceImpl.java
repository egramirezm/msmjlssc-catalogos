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
import mx.gob.imss.cit.mjlssc.model.assembler.EstadoMapper;
import mx.gob.imss.cit.mjlssc.model.entity.EstadoDto;
import mx.gob.imss.cit.mjlssc.persistence.entity.Estado;
import mx.gob.imss.cit.mjlssc.persistence.repository.EstadoRepository;
import mx.gob.imss.cit.mjlssc.service.EstadoService;

/**
 * @author
 *
 */
@Log4j2
@Service
public class EstadoServiceImpl implements EstadoService {

	@Autowired
	private EstadoMapper estadoMapper;

	@Autowired
	private EstadoRepository estadoRepository;

	/*
	 * solo prueba revisar y definir uso de mappers y demas
	 */
	@Override
	public ResponseEntity<?> getEstados() {
		log.info("Inicio Estados getEstados");
		List<EstadoDto> estadosDtos = new ArrayList<>();
		try {
			// ejemplo projection
			//SsccDelegacionView delegacionProjection = ssccDelegacionRepository.findByRefAbreviacion("DFS",SsccDelegacionView.class);
			List<Estado> estados = estadoRepository.findAll();
			// delegacionDtos = ObjectMapperUtils.mapAll(delegaciones,SsccDelegacionDto.class);
			estadosDtos = estadoMapper.toLstDto(estados);
		} catch (Exception e) {
			log.error("Exception EstadoService getEstados", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(estadosDtos, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<?> getEstadoById(Long id) {
		log.info("Inicio Estados getEstadoById");
		EstadoDto edoDTO=new EstadoDto();
		try {
			// ejemplo projection
			//SsccDelegacionView delegacionProjection = ssccDelegacionRepository.findByRefAbreviacion("DFS",SsccDelegacionView.class);
			Optional<Estado> estadoOpt = estadoRepository.findById(id);
			if(estadoOpt.isPresent()) {
				Estado edo= estadoOpt.get();
				 edoDTO= estadoMapper.toDto(edo);
			}
			// delegacionDtos = ObjectMapperUtils.mapAll(delegaciones,SsccDelegacionDto.class);
			
		} catch (Exception e) {
			log.error("Exception EstadoService getEstadoById", e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<>(edoDTO, HttpStatus.OK);
	}


}
