/**
 * 
 */
package mx.gob.imss.cit.mjlssc.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;
import mx.gob.imss.cit.mjlssc.model.entity.SsccSexoDto;
import mx.gob.imss.cit.mjlssc.model.entity.SsccUmfDto;
import mx.gob.imss.cit.mjlssc.persistence.repository.SsccSexoRepository;
import mx.gob.imss.cit.mjlssc.persistence.repository.SsccUmfRepository;
import mx.gob.imss.cit.mjlssc.service.CatalogosService;
import mx.gob.imss.cit.mjlssc.utils.ObjectMapperUtils;

/**
 * @author
 *
 */
@Log4j2
@Service
public class CatalogosServiceImpl implements CatalogosService {

	@Autowired
	private SsccUmfRepository ssccUmfRepository;

	@Autowired
	private SsccSexoRepository ssccSexoRepository;

	@Override
	public ResponseEntity<?> getCatalogoSexo() {
		log.info("CatalogosService getCatalogoSexo");
		List<SsccSexoDto> list = ObjectMapperUtils.mapAll(ssccSexoRepository.findAll(), SsccSexoDto.class);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@Override
	public ResponseEntity<?> getCatalogoUmf() {
		log.info("CatalogosService getCatalogoUmf");
		List<SsccUmfDto> list = ObjectMapperUtils.mapAll(ssccUmfRepository.findAll(), SsccUmfDto.class);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

}
